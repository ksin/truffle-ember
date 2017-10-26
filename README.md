# truffle-ember

This is a starter kit for building an Ember app that works with [Truffle](http://truffleframework.com/) for building Ethereum DApps.

## Getting Started

If you want to rename the app after you clone the project, feel free to change the name of the app in `package.json` and run `ember init`. 

Truffle commands work according to the truffle docs. After you run `truffle migrate`, you'll want some way to consuming the artifacts that are imported into the app. See `lib/import-contracts/index.js` for more info on how it is imported. 

You can run one of the generators to import your contract artifact as a service: `ember g import-contracts <contractname>`

The blueprints are still very WIP, so you may need to adjust them accordingly after generating.

## TODO

* Fix blueprints so they work for more edge cases.
* Properly import truffle-contract and web3js (or what ever's replacing web3js after it is deprecated). Currently it uses ember-browserify, but that adds a lot of build time.
* Add tests!
* Properly setup the web3-provided helper and the web3 initializer as deferring app readiness leads to bad and buggy UX.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd truffle-ember`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
