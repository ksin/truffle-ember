import Ember from 'ember';
import inject from 'ember-service/inject';
import get from 'ember-metal/get';

export default Ember.Helper.extend({
  web3: inject(),

  compute() {
    return !!get(this, 'web3.currentProvider');
  }
});
