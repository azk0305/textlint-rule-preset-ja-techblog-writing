import path from "path";
import { moduleInterop } from "@textlint/module-interop";

// 外部ルールプリセットの読み込み
const presetJaTechnicalWriting = moduleInterop(
  require("textlint-rule-preset-ja-technical-writing"),
);
const aiWriting = moduleInterop(
  require("@textlint-ja/textlint-rule-preset-ai-writing"),
);

// 外部ルールプリセットの中身のルール
const jaTechnicalWritingRules = presetJaTechnicalWriting.rules;
const aiWritingRules = aiWriting.rules;

// 外部ルールプリセットの中身のルール設定
const jaTechnicalWritingRulesConfig = presetJaTechnicalWriting.rulesConfig;
const aiWritingRulesConfig = aiWriting.rulesConfig;

// 外部単体ルールの読み込み
const textlintRulePrh = require("textlint-rule-prh");

const preset = {
  rules: {
    // プリセット
    ...jaTechnicalWritingRules,
    ...aiWritingRules,

    // 単体ルール
    prh: moduleInterop(textlintRulePrh),
  },
  rulesConfig: {
    // プリセット
    ...jaTechnicalWritingRulesConfig,
    ...aiWritingRulesConfig,

    // 単体ルール
    prh: {
      rulePaths: [path.join(__dirname, "../dict/prh-idioms.yml")],
    },
  },
};

export = preset;
