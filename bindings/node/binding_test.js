const assert = require("node:assert");
const { test } = require("node:test");

const Parser = require("tree-sitter");

test("can load grammar", () => {
  const parser = new Parser();
  const languageModule = require(".");
  assert(languageModule, "Language module is undefined");
  assert.doesNotThrow(() => parser.setLanguage(languageModule));
});
