
/* JavaScript content from scripts/main.js in folder common */
;
(function() {
    var vendorPath = './lib';
    if(sessionStorage){
        if(!sessionStorage.getItem("ts_source")){
            sessionStorage.setItem("ts_source",new Date().getTime());
        }
    }

    require.config({
        baseUrl:$config.js_path,
        skipDataMain: true,
        waitSeconds: 200,
        paths: {
            'angular': vendorPath + '/angular/angular',
            'angular-route': vendorPath + '/angular-route/angular-route',
            'angular-resource': vendorPath + '/angular-resource/angular-resource',
            'angular-animate': vendorPath + '/angular-animate/angular-animate',
            'angular-growl': vendorPath + '/angular-growl/build/angular-growl',
            'angular-cookies': vendorPath + '/angular-cookies/angular-cookies',
            'angular-sanitize': vendorPath + '/angular-sanitize/angular-sanitize',
            'ui.router': vendorPath + '/angular-ui-router/release/angular-ui-router',
            'ngStorage': vendorPath + '/ngstorage/ngStorage',
            'angular-ui-validate': vendorPath + '/angular-ui-validate/dist/validate',
            'ui.bootstrap': vendorPath + '/angular-bootstrap/ui-bootstrap',
            'bindonce': vendorPath + '/angular-bindonce/bindonce',
            'navtree': vendorPath + '/angular-bootstrap-nav-tree-js/dist/abn_tree_directive',
            'jQuery': vendorPath + '/jquery/dist/jquery',
            'highcharts': vendorPath + '/highcharts/highcharts',
            'ng-clip': vendorPath + '/ng-clip/dest/ng-clip.min',
            'app': './properties/app',
            'ionic': './lib/ionic/js/ionic.bundle',
            'bootstrap': './properties/bootstrap',
            'angular-locale-zh-cn': vendorPath + '/ngLocale/angular-locale_zh-cn',
            'angular-translate': vendorPath + '/angular-translate/angular-translate',
            'angular-file-upload': vendorPath + '/angular-file-upload/dist/angular-file-upload'
        },
        shim: {
            'jQuery': { exports: 'jQuery'},
            'angular': { exports: 'angular', deps: ['jQuery']},
            'ui.router': { deps: ['angular']},
            'ngStorage': { deps: ['angular']},
            'angular-animate': {deps: ['angular']},
            'angular-growl': { deps: ['angular-animate']},
            'angular-resource': { deps: ['angular']},
            'angular-cookies': { deps: ['angular']},
            'angular-sanitize': { deps: ['angular']},
            'angular-ui-validate': { deps: ['angular']},
            'bindonce': { deps: ['angular']},
            'navtree': { deps: ['angular']},
            'ui.bootstrap': { deps: ['angular']},
            'ng-grid':{ deps: ['angular']},
            'ng-clip': {deps: ['angular']},
            'highcharts': {deps: ['jQuery']},
            'spinjs': {},
            'angular-locale-zh-cn': { deps: ['angular']},
            'angular-translate': { deps: ['angular']},
            'angular-file-upload':{deps:['angular']}
        },
        urlArgs: "bust=" +  sessionStorage.getItem("ts_source")
    });
    /*配置了模块名，直接诶使用模块名引入*/
    require(["./properties/bootstrap"], function(bootstrap) {});
}());