<div align="center" markdown="1">

  
  # Simple app <img width="55px" height="55px" src="https://dl2.macupdate.com/images/icons256/52661.png?d=1519663273">
  
  **v. 1.0.1**
    
  [![Maintainability](https://api.codeclimate.com/v1/badges/9afa7ea743b24b5dc83a/maintainability)](https://codeclimate.com/github/radswiat/react-test-app/maintainability)
  
  [![Test Coverage](https://api.codeclimate.com/v1/badges/9afa7ea743b24b5dc83a/test_coverage)](https://codeclimate.com/github/radswiat/react-test-app/test_coverage)  
    
  [Change log](CHANGES.md)

</div>

# Features
 
## Frontend
- captcha with backend validation
- form validation
- flex with BEM and core styles folder
- local css-modules for components
- aliases for development ( simplified the import statements )
- mobx as centralized store
- well structured making it ready to be expanded
- index.js files to simplify the imports and have better control over exports
- eslint and sasslint
- optimized and modularized webpack build
- unit tests, codeclimate and circlecli included
- e2e tests
- sinon, mocks, axios-mock, enzyme for unit testing

# Quick start guide

## Starting up the client
1. `npm install`
2. `npm start`
3. Visit: `localhost:3000`
3. Make sure simple-app-server is running

## Run unit tests

`npm run start:tests`
`npm run start:tests:watch`

## Run e2e tests

`cypress open`

# Structure overview

- .circleci/ - integration layer for circleci
- build-tools/ - modularized webpack build config location && dev server
- src
  - app
  - config
  - public
- test - unit tests and e2e tests configs
- integration-tests - cypress.io e2e test files
