'use strict';

/**
 * @ngdoc function
 * @name mywebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mywebApp
 */
angular.module('mywebApp',[])
.controller('HomeCtrl',['$scope','$http','$log', function($scope,$http,$log) {
    // $http.get('http://localhost:55867/movies').
    //     success(function(data) {
    //         $scope.movies = angular.fromJson(data);
    //         $scope.$log = $log;
    //         $log.log($scope.movies.movies[0]);
    //     });
	$scope.Hello={
		image:'images/me.jpg',
    	captionImage:'Hello, World!',
    	section:'about',
    	detail:'I still improving to create apps'
	};

	$scope.Experienced={
		image:'images/terkejut-bandung.jpg',
    	captionImage:'Xperienced',
    	section:'EXPERIENCED',
    	detail:'every experience, good or bad is priceless collector\'s item'
	};
	$scope.Projects={
		image:'images/me2.jpg',
    	captionImage:'Projects',
    	section:'COLLABORATION PROJECTS',
    	detail:'big projects I\'ve ever handle'
	};
	$scope.Contact={
		image:'images/WP_20131216_009.jpg',
    	captionImage:'Contact',
    	section:'follow me',
    	detail:'trust me, i dont wanna bite you, lets be friends'
	};
	$scope.experiences=[
	{

		isi:'BACK END WEB',
	},
	{

		isi:'FONT END WEB',
	},
	{

		isi:'MOBILE GAMES',
	}
	];
}])
.directive('pageInfo',function(){
	return{
		restrict:'E',
    	//transclude: true,
		scope:{
			info:'=info'
		},
		templateUrl:'templates/background.html'
		//,link:function(scope,elemnt,attr){}
	};

})
.directive('lingkaran',function(){
	return{
		restrict:'E',
    	//transclude: true,
		// templateUrl:'templates/lingkaran.html'
		template: function(elem, attr){
           return '<div class="lingkaran">'+
					'<h1 class="title" style="'+attr.style+'">'+elem.text()+'</h1></div>';
        }

		
	};

});
