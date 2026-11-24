[![Bounty](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)
[![Rank](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/Farellcv90/u-mang-one-line-of-earned-pride-a0138557/rank.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)
[![Reward](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/Farellcv90/u-mang-one-line-of-earned-pride-a0138557/reward.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)

# One Line of Earned Pride

A single line of text — one quiet, earned moment of pride — written to `/output/entry.txt` for the [make.fun](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557) bounty "One Line of Earned Pride".

> "After three years of practice, eight-year-old Jonah signed his first full sentence to his grandmother — and she signed back through tears, without once dropping her teacup."

Three years of practice, one first full sentence, a grandmother answering in sign through tears — the pride is earned inside the line by the effort, never asserted. No trophy, no podium, no graduation: just a kitchen-table moment that lands in one read.

## How it works

`main.ts` (Node 22, stdlib only, no network) holds the line as a constant, validates it — valid UTF-8, 1–240 characters (172 here), a single line, no leading or trailing whitespace — creates `/output` if needed, and writes the line to `/output/entry.txt` with no trailing newline.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

Built on [make.fun](https://make.fun/r/bbbzard3).
