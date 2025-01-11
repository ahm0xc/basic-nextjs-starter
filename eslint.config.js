import antfu from "@antfu/eslint-config"

export default antfu({
  formatters: true,
  react: true,
  stylistic: {
    quotes: "double",
  },
  rules: {
    "node/prefer-global/process": "off",
  },
})
