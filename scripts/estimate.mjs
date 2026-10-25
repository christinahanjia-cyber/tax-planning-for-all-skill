// Local adapter only. The website's tax engine is not distributed in this skill.
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const args = process.argv.slice(2);
const option = name => args[args.indexOf(name) + 1];
if (!args.includes('--engine') || !args.includes('--input')) {
  throw new Error('Usage: node estimate.mjs --engine /path/to/dist --input /path/to/input.json');
}
const data = JSON.parse(await readFile(resolve(option('--input')), 'utf8'));
if (data.year !== 2026) throw new Error('This adapter supports the 2026 engine only.');
if (!data.baseline || !Array.isArray(data.strategies)) throw new Error('Provide baseline and strategies.');
const engine = resolve(option('--engine'));
const { DEFAULT, calculate } = await import(pathToFileURL(resolve(engine, 'tax.mjs')));
const { scenario } = await import(pathToFileURL(resolve(engine, 'planner.mjs')));
for (const key of Object.keys(data.baseline)) {
  if (!(key in DEFAULT)) throw new Error(`Unknown baseline input: ${key}. Check the engine schema.`);
}
if (!data.baseline.status) throw new Error('Provide an explicit filing status.');
const baseline = { ...DEFAULT, ...data.baseline };
const assumedDefaults = Object.fromEntries(Object.entries(DEFAULT).filter(([key]) => !(key in data.baseline)));
const results = data.strategies.map(strategy => {
  try {
    const result = scenario(baseline, strategy);
    return { strategy: strategy.type, ...result };
  } catch (error) {
    return { strategy: strategy.type, blocked: true, message: error.message };
  }
});
console.log(JSON.stringify({ year: 2026, scope: 'US federal planning illustration', baseline: calculate(baseline), assumedDefaults, results }, null, 2));
