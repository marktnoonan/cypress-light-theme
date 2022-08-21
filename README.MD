# Test

This is a repo to play around with a light mode for the Cypress App Command Log, it is not ready to use, please don't use.

## Install

### npm

```sh
npm add --save-dev cypress-light-theme
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


## Development

```sh
npm install
npx cypress open
```


## TODO

- [x] error handling
- [ ] design tweaks
- [x] clean up style sheet getting added & removed?
- [ ] documentation
- [ ] finish checking that colors are accessible
- [x] fix text select color
- [x] use system setting by default
- [ ] ~~add a way to change this to the settings page~~ (not doing this for v1)
- [x] remove the button being injected into the reporter
- [ ] submit to the [plugins list](https://docs.cypress.io/plugins/directory)
