
/* JavaScript content from scripts/app.js in folder common */
define([
    'angular',
    'angular-cookies',
    'ui.router',
    'ngStorage',
    'ui.bootstrap',
    'angular-animate',
    'angular-growl',
    'angular-ui-validate',
    'angular-sanitize',
    'angular-locale-zh-cn',
    'angular-translate',
    'angular-file-upload',
    'ionic',
    'bindonce',
    'navtree',
    './js/states/_base',
    './js/controllers/_base',
    './js/directives/_base',
    './js/services/_base'
], function(angular) {
    'use strict';
    var app = angular.module('myapp', ['ui.router','ngStorage', 'ui.bootstrap', 'ionic', 'ui.validate', 'ngSanitize', 'ngAnimate', 'ngCookies', 'angular-growl', 'pasvaz.bindonce', 'angularBootstrapNavTree', 'pascalprecht.translate', 'angularFileUpload', 'myapp.services', 'myapp.states', 'myapp.controllers', 'myapp.directives']);
    return app;
});
