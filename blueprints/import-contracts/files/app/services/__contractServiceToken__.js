import Service from 'ember-service';
import inject from 'ember-service/inject';
import <%= entityName %>Artifacts from '<%= dasherizedPackageName %>/contracts/<%= capitalized %>';
import { default as contract } from 'npm:truffle-contract';
import computed from 'ember-computed';
import get from 'ember-metal/get';

export default Service.extend({
  web3: inject(),

  instance: computed({
    get() {
      const currentProvider = get(this, 'web3.instance').currentProvider;
      const contractInstance = contract(<%= entityName %>Artifacts);

      contractInstance.setProvider(currentProvider);
      return contractInstance;
    }
  })
});
