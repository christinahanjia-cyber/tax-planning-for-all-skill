# Tax Planning for All — AI skill

Explore tax planning from a return, manual numbers, or a rough income estimate. See both estimated federal tax changes and money committed.

Copy this folder into your assistant's supported skills directory. Invoke **tax-planning-for-all** and start with a planning year, filing status, approximate income and income type. PDF support depends on the host assistant.

The skill works as a planning conversation without a calculator. Numerical estimates require a compatible, authorized local Tax Planning for All engine; that engine is not included. The adapter uses Node.js and the existing engine without reimplementing tax formulas. It does not combine strategies or extract PDFs.

Synthetic adapter input:

```json
{"year":2026,"baseline":{"status":"single","wages":120000},"strategies":[{"type":"retirement","amount":5000,"cash":0}]}
```

All omitted baseline values are returned as explicit model assumptions. Review them before relying on results. The package contains no real returns or taxpayer data. AI uploads follow the host platform's privacy policies; do not assume local-only processing.

Only the skill instructions and local adapter are shared here. Website source code and the tax engine are excluded. No license to that separate code is granted. A broader reuse license for this package has not yet been selected.
