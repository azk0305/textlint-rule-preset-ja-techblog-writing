# textlint-rule-preset-ja-techblog-writing

QiitaやZennのような技術ブログへ記事を投稿する際に利用するtextlintルールプリセット

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-preset-ja-techblog-writing

## Usage

Via `.textlintrc.json`(Recommended)

```json
{
    "rules": {
        "preset-ja-techblog-writing": true
    }
}
```

Via CLI

```
textlint --rule preset-ja-techblog-writing README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

MIT © azmnc
