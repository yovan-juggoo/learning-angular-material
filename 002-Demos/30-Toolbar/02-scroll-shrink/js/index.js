var app = angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache']);

app.controller('TitleController', function($scope) {
  $scope.title = 'My App Title';
});

app.controller('AppCtrl', function($scope) {
  var imagePath = 'img/list/60.jpeg';

  $scope.todos = [];
  for (var i = 0; i < 15; i++) {
    $scope.todos.push({
      face: imagePath,
      what: "Brunch this weekend?",
      who: "Min Li Chan",
      notes: "I'll be in your neighborhood doing errands."
    });
  }
});


/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/