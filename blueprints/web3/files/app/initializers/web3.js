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

    // TODO-> install web3 node module in order to provide fallback
    // web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    Ember.Logger.warn("truffle-ember: No web3 detected. Consider using Mist/Metamask.");
    app.advanceReadiness();
  });
}

export default {
  initialize
};
