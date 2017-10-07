import Service from 'ember-service';
import inject from 'ember-service/inject';
import <%= entityName %>Artifacts from '<%= dasherizedPackageName %>/contracts/<%= capitalized %>';
import { default as contract } from 'npm:truffle-contract';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import { task } from 'ember-concurrency';

export default Service.extend({
  web3: inject(),

  instance: computed('web3.instance', {
    get() {
      const currentProvider = get(this, 'web3.instance').currentProvider;
      const contractInstance = contract(<%= entityName %>Artifacts);

      contractInstance.setProvider(currentProvider);
      return contractInstance;
    }
  }),

  deployed: task(function * () {
    return yield get(this, 'instance').deployed();
  })
});
