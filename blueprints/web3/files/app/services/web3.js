/* globals web3 */
import Service from 'ember-service';
import computed from 'ember-computed';

export default Service.extend({
  instance: computed({
    get() {
      return web3;
    }
  })
});
