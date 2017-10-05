/* globals web3 */
import Ember from 'ember';
import Service from 'ember-service';
import computed from 'ember-computed';

export default Service.extend({
  currentProvider: computed({
    get() {
      if (typeof web3 !== 'undefined' && web3.currentProvider) {
        Ember.Logger.info("<%= dasherizedPackageName %>: Using web3 detected from external source like Mist/Metamask");
        return web3.currentProvider;
      }

      Ember.Logger.warn("<%= dasherizedPackageName %>: No web3 detected. Consider using Mist/Metamask.");
      return null;
    }
  })
});
