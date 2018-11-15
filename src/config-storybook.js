//load modules required
var clc = require('./colors'),
  shelljs = require('shelljs'),
  async = require('async'),
  fs = require('fs'),
  mergePkg = require('merge-pkg');
var currentStep = 1;
var app = {
  //add storybook config to project
  addStorybookConfig: function(callback) {
    console.log(clc.info(currentStep++ + '. add storybook config'));
    try {
      var resourcesPath = '/../resources/' + app.options.path + '/';
      shelljs.cp('-rf', __dirname + resourcesPath + '\.*', './');
      shelljs.cp('-rf', __dirname + resourcesPath + 'stories', './');
      console.log(clc.notice('storybook config added'));
      callback();
    } catch (err) {
      callback(new Error('failed to add storybook config:\n' + err.message));
    }
  },

  // merge package.json
  mergePackages: function(callback) {
    try {
      var resourcesPath = '/../resources/' + app.options.path + '/';
      var resPkg = fs.readFileSync(__dirname + resourcesPath + 'package.json', 'utf-8');
      var proPkg = fs.readFileSync('./package.json', 'utf-8');
      var destPkg = mergePkg(JSON.parse(proPkg), JSON.parse(resPkg));

      fs.writeFileSync('./package.json', JSON.stringify(destPkg, null, 2));
      console.log(clc.notice('package.json update successfully'));
      callback();
    } catch(err) {
      callback(new Error('failed to update package.json file: \n' + err.message));
    }
  },

  //finished init
  initFinished: function(callback) {
    console.log(clc.info(currentStep++ + '. storybook config setting finished!'));
    console.log('*********next run**********');
    console.log('$ npm/yarn install');
    console.log('$ npm/yarn storybook');
    console.log('***************************');
    callback();
  },
};

module.exports = {
  init: function(options) {
    app.options = options || {};

    var commonWaterFall = [
      app.addStorybookConfig,

      app.mergePackages,
      
      app.initFinished
    ];

    async.waterfall(commonWaterFall, function(err, rs) {
      if (err) {
        console.log(clc.error(err.message));
        return;
      }
    });
  }
};