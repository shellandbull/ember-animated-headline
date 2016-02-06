/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-animated-headline',
  included: function(app) {
    this._super.included.apply(this, arguments);
    // Don't include the precompiled css file if the user uses ember-cli-sass
    // if (!app.registry.availablePlugins['ember-cli-sass']) {

    //   var addonConfig = app.options['ember-power-select'];

    //   if (!addonConfig || !addonConfig.theme) {
    //     app.import('vendor/ember-power-select.css');
    //   } else {
    //     app.import('vendor/ember-power-select-'+addonConfig.theme+'.css');
    //   }
    // }
  },
};
