# `cypress-light-theme`

`cypress-light-theme` adds a **completely unofficial** "light theme" for the Cypress App's Command Log in Cypress v10+, allowing the user to either follow the system preference for light/dark mode or, with an environment variable, to force one or the other to always be set.

Inspired by the [`cypress-dark`](https://npmjs.com/package/cypress-dark) package by @bahmutov for Cypress 9 and below, we wanted to do something quick that did not require official designs for the theme, or for the code changes necessary to support a full theme system. This means that as Cypress changes over time, this light theme may break in unexpected ways. Please create and issue (or a Pull Request ❤️) if something is wrong.

This package is created and maintained by @marktnoonan, @mapsandapps, and @viniciuspietscher.

## Install

### npm

```sh
npm install --save-dev cypress-light-theme
```

### yarn

```sh
yarn add --dev cypress-light-theme
```

in `cypress/support/e2e.js` (for e2e tests) and/or `cypress/support/component.js` (for component tests),

```js
import setLightTheme from 'cypress-light-theme'

setLightTheme()
```

### Configuration

The theme of the Command Log can be set with a `THEME` environment variable to be `light`, `dark` or `system`. The default is `system`. The environment variable can be [set in your configuration file](https://on.cypress.io/configuration):

```js
// cypress.config.js

const { defineConfig } = require('cypress')

module.exports = defineConfig({
    env: {
        THEME: 'light'
    }
})

```

This can be overridden by setting `CYPRESS_THEME` from the command line. [Learn more about how environment variables work in Cypress](https://on.cypress.io/environment-variables).

## Development

```sh
npm install
npx cypress open
```


## TODO

- [x] error handling
- [x] design tweaks
- [x] clean up style sheet getting added & removed?
- [x] documentation
- [x] finish checking that colors are accessible
- [x] fix text select color
- [x] use system setting by default
- [ ] ~~add a way to change this to the settings page~~ (not doing this for v1, went with environment variables instead)
- [x] remove the button being injected into the reporter
- [ ] submit to the [plugins list](https://docs.cypress.io/plugins/directory)
