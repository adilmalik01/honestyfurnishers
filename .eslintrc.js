module.exports = {
    root: true,
    extends: [
      "next",
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended"
    ],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "react-hooks/exhaustive-deps": "off",
      "@next/next/no-img-element": "off"
    }
  };
  