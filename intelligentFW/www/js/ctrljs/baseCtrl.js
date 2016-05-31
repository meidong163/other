/* JavaScript content from scripts/console/controllers/loginCtrl.js in folder common */
define([ "./../controllers/controllers" ], function (controllers) {
  "use strict";

  controllers.controller("baseCtrl", [ "$scope","$ionicSideMenuDelegate",
    function ($scope, $ionicSideMenuDelegate) {


      $scope.toggle = function(){
        $ionicSideMenuDelegate.toggleLeft();
      };
      

    }])

});

