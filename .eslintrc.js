const path = require('path');

console.log(`${__dirname}/node_modules`);

module.exports = {
  "extends": "eslint-config-airbnb",
  "env": {
    "browser": true,
    "mocha": true
  },
  "rules": {
    // These are nice-to-haves but not currently possible for us
    // Other projects should have these enabled
    "react/jsx-no-bind": 0,
    "react/require-default-props": 0,
    "react/forbid-prop-types": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/no-unused-prop-types": ["error", { skipShapeProps: true }],

    "react/jsx-handler-names": ["error", {
      "eventHandlerPrefix": "handle",
      "eventHandlerPropPrefix": "on"
    }],

    // These two rules workaround current compat issues /w eslint4 & a11y
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],

    // This is dumb. It errors if any `style` prop is not an object.
    // The main i18n lib for react uses this for number styles.
    "react/style-prop-object": 0,

    // We use .js, not .jsx
    "react/jsx-filename-extension": 0,

    // What is this? 1980?
    "max-len": 0,

    // We set requireForBlockBody to false (airbnb is true)
    "arrow-parens": ["error", "as-needed", {
      requireForBlockBody: false,
    }],

    // This interfers with our dwell tracking code
    "class-methods-use-this": 0,

    // This messes with the way we use require() to load images in templates
    "global-require": 0,

    // A lot of libraries (express for example) function via param reassignment
    // This rule also complicates reduces and so. It's an error in airbnb, but
    // we'll make it only a warning for now
    "no-param-reassign": 0,

    // There are plenty of times when you want to sometimes return a value and
    // otherwise not. Or you want to early-return. We should allow this.
    "consistent-return": 0,

    // Allow importing of packages listed in devDependencies
    "import/no-extraneous-dependencies":
      ["error", {
        "packageDir": __dirname,
        "devDependencies": true,
        "optionalDependencies": false,
        "peerDependencies": false
      }]
  },
  "plugins": [
    "react",
    "react-native",
    "import"
  ],
  "settings": {
      "import/parser": "babel-eslint",
      "import/resolver": {
        node: {
          paths: [
            `${__dirname}/node_modules`,
            `${__dirname}/src`,
            `${__dirname}/src/common`,
            `${__dirname}/src/features`,
          ]
        },
        "react-native": {
          paths: [
            `${__dirname}/node_modules`,
            `${__dirname}/src`,
            `${__dirname}/src/common`,
            `${__dirname}/src/features`,
          ]
        },
      }
  },
  "parser": "babel-eslint",
  "globals": {
    "__DEVELOPMENT__": true,
    "__CLIENT__": true,
    "__SERVER__": true,
    "__TEST__": true,
    "__DISABLE_SSR__": true,
    "__DEVTOOLS__": true,
    "_": true,
    "beforeAll": true,
    "chai": true,
    "expect": true,
    "jest": true,
    "shallow": true,
    "socket": true,
    "webpackIsomorphicTools": true,
  }
}
