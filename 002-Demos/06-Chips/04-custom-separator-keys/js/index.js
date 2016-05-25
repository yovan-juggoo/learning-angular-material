(function () {
  'use strict';
  angular
      .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
      .controller('CustomSeparatorCtrl', DemoCtrl);

  function DemoCtrl ($mdConstant) {
    // Use common key codes found in $mdConstant.KEY_CODE...
    this.keys = [$mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA];
    this.tags = [];

    // Any key code can be used to create a custom separator
    var semicolon = 186;
    this.customKeys = [$mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA, semicolon];
    this.contacts = ['test@example.com'];
  }
})();


/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/