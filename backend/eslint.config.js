import pluginJs from "@eslint/js";
import globals from "globals";

export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
  },
  pluginJs.configs.recommended,
];
