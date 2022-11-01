module.exports = {
  root: true,
  extends: "next/core-web-vitals",
  // plugins: ["prettier"],
  rules: {
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],

    // "prettier/prettier": "warn",
    "linebreak-style": [1, "unix"],
    "array-bracket-spacing": [2, "never"],
    "arrow-parens": [2, "always"],
    "brace-style": [2, "stroustrup"],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": [
      2,
      {
        before: false,
        after: true,
      },
    ],
    curly: [2, "multi-or-nest"],
    "eol-last": [2, "always"],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
      },
    ],
    "key-spacing": [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    "max-len": [
      2,
      {
        code: 130,
        ignoreComments: false,
      },
    ],
    quotes: [2, "double"],
    semi: [2, "always"],
    "semi-spacing": [
      2,
      {
        before: false,
        after: true,
      },
    ],
    "semi-style": [2, "last"],
    "space-in-parens": [2, "never"],
    "padded-blocks": [2, "never"],
    //semantics
    "handle-callback-err": 0,
    "no-console": 1,
    radix: [2, "as-needed"],
    //react-jsx
    "jsx-quotes": [2, "prefer-double"],
    "react/jsx-closing-bracket-location": [
      2,
      {
        selfClosing: "after-props",
        nonEmpty: "tag-aligned",
      },
    ],
    "react/jsx-first-prop-new-line": [2, "multiline-multiprop"],
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-indent": [
      2,
      2,
      {
        indentLogicalExpressions: false,
        checkAttributes: true,
      },
    ],
    "react/jsx-indent-props": [0, 2],
    "react/jsx-key": 2,
    "react/jsx-max-props-per-line": [
      2,
      {
        maximum: 1,
        when: "multiline",
      },
    ],
    "react/jsx-pascal-case": [
      2,
      {
        allowAllCaps: true,
      },
    ],
    "react/jsx-tag-spacing": [
      2,
      {
        beforeSelfClosing: "always",
      },
    ],
    "react/jsx-wrap-multilines": [
      2,
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      },
    ],
    //react-native
    "react-native/no-inline-styles": 0,
    //typescript
    "import/first": 1,
  },
};
