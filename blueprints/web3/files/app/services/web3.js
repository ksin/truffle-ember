/* globals web3 */
import Ember from 'ember';
import Service from 'ember-service';
import computed from 'ember-computed';
import set from 'ember-metal/set';
import get from 'ember-metal/get';

export default Service.extend({
  init() {
    this._super(...arguments);

    if (typeof web3 !== 'undefined' && web3.currentProvider) {
      Ember.Logger.info("<%= dasherizedPackageName %>: Using web3 detected from external source like Mist/Metamask");
      set(this, 'provided', true);
      return;
    }

    Ember.Logger.warn("<%= dasherizedPackageName %>: No web3 detected. Consider using Mist/Metamask.");
    // TODO-> install web3 node module in order to provide fallback
    // web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    set(this, 'provided', false);
  },

  instance: computed({
    get() {
      return web3;
    }
  })
});
