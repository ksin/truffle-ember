/* eslint-env node */
module.exports = {
  description: 'import contracts',

  beforeInstall(options) {
    return this.lookupBlueprint('web3').install(options);
  },

  fileMapTokens(options) {
    return {
      __contractServiceToken__: function(options) {
        return options.dasherizedModuleName + '-contract';
      }
    }
  },

  locals(options) {
    const entityName = options.entity.name
    return {
      entityName,
      capitalized: entityName.charAt(0).toUpperCase() + entityName.slice(1)
    };
  }
};
