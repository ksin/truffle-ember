import Service from 'ember-service';
import inject from 'ember-service/inject';
import <%= entityName %>Artifacts from '<%= dasherizedPackageName %>/contracts/<%= capitalized %>';
import { default as contract } from 'npm:truffle-contract';
import computed, { reads } from 'ember-computed';
import get from 'ember-metal/get';

export default Service.extend({
  web3: inject(),
  provider: reads('web3.currentProvider'),

  instance: computed({
    get() {
      const provider = get(this, 'provider');
      const contractInstance = contract(<%= entityName %>Artifacts);

      contractInstance.setProvider(provider);
      return contractInstance;
    }
  })
});
