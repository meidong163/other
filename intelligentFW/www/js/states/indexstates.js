define([ "./states" ], function(states) {
	states.config([ "$stateProvider", "$urlRouterProvider",
			function($stateProvider, $urlRouterProvider) {
				$urlRouterProvider.otherwise("/");

				// //登陆界面
				// $stateProvider.state("login", {
				// 	url : "/",
				// 	templateUrl : "views/login/login.html"
				// });

        //
        // //过桥页
        // $stateProvider.state("guide", {
        //   url : "/",
        //   templateUrl : "views/CommonUI/guidepage.html"
        // });



        
        // //通用界面
        // $stateProvider.state("base", {
        //   url : "/",
        //   templateUrl : "views/CommonUI/base.html"
        // });
        //

        //
        // //刷新加载
        // $stateProvider.state("refresh", {
        //   url : "/",
        //   templateUrl : "views/CommonFunction/refresh.html"
        // });


        //测试组件(支付宝支付,微信支付,摇一摇)
        $stateProvider.state("pay", {
          url : "/",
          templateUrl : "views/component/pay.html"
        });





        //a界面
				$stateProvider.state("a", {
					templateUrl : "views/login/a.html",
					params:{'username':null,'password':null}
				});
			} ]);





});
