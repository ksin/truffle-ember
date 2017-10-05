/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const jsonModule = require('broccoli-json-module');
const path = require('path');

module.exports = {
  name: 'import-contracts',

  isDevelopingAddon() {
    return true;
  },

  treeForApp() {
    const contractsPath = path.join(this.app.project.root, '/build/contracts');
    const contracts = new Funnel(contractsPath, {
      'destDir': 'contracts',
      include: ['*.json']
    });

    return jsonModule(contracts);
  }
};
