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

in `cypress/support/e2e.js`,

```js
import setLightTheme from 'cypress-light-theme'

setLightTheme()
```


## Development

```sh
npm install
npx cypress open
```
