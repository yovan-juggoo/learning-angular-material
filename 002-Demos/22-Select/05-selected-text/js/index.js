angular
    .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
    .controller('SelectedTextController', function($scope) {
      $scope.items = [1, 2, 3, 4, 5, 6, 7];
      $scope.selectedItem;
      $scope.getSelectedText = function() {
        if ($scope.selectedItem !== undefined) {
          return "You have selected: Item " + $scope.selectedItem;
        } else {
          return "Please select an item";
        }
      };
    });


/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/