/*
  TODO-> Install web3 node module to replace injected version of web3.js with consistent development version
  https://github.com/MetaMask/faq/blob/master/DEVELOPERS.md#partly_sunny-web3---ethereum-browser-environment-check
*/

/* globals web3 */
import Ember from 'ember';

export function initialize(app) {
  // We defer readiness until window has loaded because web3 is typically
  // injected by the time load is complete. It is less consistent before load.
  app.deferReadiness();

  window.addEventListener('load', () => {
    if (typeof web3 !== 'undefined' && web3.currentProvider) {
      Ember.Logger.info("truffle-ember: Using web3 detected from external source like Mist/Metamask");
      app.advanceReadiness();
      return;
    }

    // TODO-> once web3 node module is installed, provide fallback in case of no injection
    // web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    Ember.Logger.warn("truffle-ember: No web3 detected. Consider using Mist/Metamask.");
    app.advanceReadiness();
  });
}

export default {
  initialize
};
