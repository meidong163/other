/* JavaScript content from scripts/console/controllers/loginCtrl.js in folder common */
define([ "./../controllers/controllers" ], function (controllers) {
  "use strict";

  controllers.controller("refreshCtrl", [ "$scope", "$state", "$localStorage","$stateParams","$timeout",
    function ($scope, $state, $localStorage,$stateParams,$timeout) {

      $scope.items = [];
      var base = 0;
      $scope.load_more = function(){
        $timeout(function(){
          for(var i=0;i<10;i++,base++)
            $scope.items.push(["item ",base].join(""));
          $scope.$broadcast("scroll.infiniteScrollComplete");
        },500);
      };


    } ])

});

