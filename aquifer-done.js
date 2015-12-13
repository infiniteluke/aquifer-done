/**
 * @file
 * Know when your Aquifer build is done.
 */

/**
 * Extension that is exported to Aquifer.
 * @param {object} Aquifer instance of Aquifer containing an active project.
 * @param {object} AquiferDoneConfig config object passed in from Aquifer project's json file.
 * @returns {function} object that consumes Aquifer's extension API.
 */
module.exports = function(Aquifer, AquiferDoneConfig) {

  'use strict';

  var AquiferDone  = function () {},
      Promise      = require('bluebird'),
      path         = require('path'),
      notifier     = require('node-notifier'),
      _            = require('lodash'),
      icon         = path.join(__dirname, 'src', 'aquifer-logo-square-500.png');
      
  // Create defauts for options.
  _.defaults(AquiferDoneConfig, {
    postBuild: 'Aquifer is done building!',
    sound: false,
    wait: false
  });
  
  AquiferDone.postBuild = function () {
    return new Promise(function(resolve, reject) {

      notifier.notify({
        title: 'Aquifer',
        message: AquiferDoneConfig.postBuild,
        icon: icon,
        sound: AquiferDoneConfig.sound,
        wait: AquiferDoneConfig.wait
      }, function (err, response) {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
      
    });
  };

  return AquiferDone;
};
