/* JavaScript content from scripts/console/controllers/loginCtrl.js in folder common */
define([ "./../controllers/controllers" ], function (controllers) {
       "use strict";

       controllers.controller("aCtrl", [ "$scope", "$state", "$localStorage","$stateParams",
                                            function ($scope, $state, $localStorage,$stateParams) {

         // $scope.load=window.localStorage.getItem("user");
         //  $scope.load=$weifei;
                                          
                                                $scope.loginname=$stateParams.username;
                                                $scope.loginpwd=$stateParams.password;
            } ])
       
       });


/**
 * 登入界面
 */
$(function (){
    //获取社保高度
    var height = $(window).height();
    var width = $(window).width();
    //自适应
//	$(".main").css('height', height);
//	$(".main").css('width', width);
    //自适应
    $(".ui-content").css('height', height);
    $(".ui-content").css('width', width);

    $("#newuser").css('margin-top', height-20);
});
