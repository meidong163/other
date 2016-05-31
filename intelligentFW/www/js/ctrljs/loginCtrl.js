/* JavaScript content from scripts/console/controllers/loginCtrl.js in folder common */
define([ "./../controllers/controllers" ], function (controllers) {
    "use strict";

    controllers.controller("loginCtrl", [ "$scope", "$state", "$localStorage", "$ionicLoading", "$timeout",
        function ($scope, $state, $localStorage, $ionicLoading, $timeout) {

            // $scope.items = [];
            // var idx = 0;
            // $scope.load = function() {
            //     //显示载入指示器
            //     $ionicLoading.show({
            //         template: "正在载入数据，请稍后..."
            //     });
            //     //延时2000ms来模拟载入的耗时行为
            //     $timeout(function(){
            //         for(var i=0;i<10;i++,idx++) $scope.items.unshift("item " + idx);
            //         //隐藏载入指示器
            //         $ionicLoading.hide();
            //     },2000);
            // };
            // window.localStorage.setItem("user",$("#signIn").text())


            $scope.user = {
                username: "",
                password: ""

            };

            $scope.signIn = function () {
                $state.go("a", {
                    username: $scope.user.username,
                    password: $scope.user.password

                });
            }
        } ])

});


/**
 * 登入界面
 */
$(function () {
    //获取社保高度
    var height = $(window).height();
    var width = $(window).width();
    //自适应
//	$(".main").css('height', height);
//	$(".main").css('width', width);
    //自适应
    $(".ui-content").css('height', height);
    $(".ui-content").css('width', width);

    $("#newuser").css('margin-top', height - 20);
});
