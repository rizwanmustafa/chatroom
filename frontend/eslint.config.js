import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // This removes the warning regarding React version being unset
  { ...pluginReactConfig, settings: { react: { version: "detect" } } },
  { ignores: ["dist/*"] },
  { rules: { "react/react-in-jsx-scope": "off" } },
  eslintConfigPrettier,
];
