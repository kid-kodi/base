/*
 * spa.js
 * Root namespace module
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */
(function(){
  
  var spa = angular.module('spa', [
    'ngRoute',
    'spa.ctr',
    'spa.filter'
  ]);

  spa.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/phones', {
          templateUrl: 'partials/object-list.html',
          controller: 'spa.list.ctr'
        }).
        when('/phones/:phoneId', {
          templateUrl: 'partials/object-detail.html',
          controller: 'spa.detail.ctr'
        }).
        otherwise({
          redirectTo: '/phones'
        });
    }
  ]);
})();

