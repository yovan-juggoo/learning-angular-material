angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.controller('AppCtrl', function($scope) {
  $scope.demo = {
    showTooltip : false,
    tipDirection : ''
  };

  $scope.$watch('demo.tipDirection',function(val) {
    if (val && val.length ) {
      $scope.demo.showTooltip = true;
    }
  })
});


/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/