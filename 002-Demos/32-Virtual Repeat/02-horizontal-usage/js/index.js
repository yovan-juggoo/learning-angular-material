(function () {
  'use strict';

    angular
      .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
      .controller('AppCtrl', function() {
        this.items = [];
        for (var i = 0; i < 1000; i++) {
          this.items.push(i);
        }
      });

})();


/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/