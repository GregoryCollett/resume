'use strict';

/**
 * @ngdoc function
 * @name meApp.controller:mainController
 * @description
 * # MainCtrl
 * Controller of the meApp
 */
angular.module('meApp')
	.controller('mainController', [
		'$scope',
		'$location',
		'smoothScroll',
		'$timeout', 
		'projects',
		'experiments',
		'$window',
		function ($scope, $location, smoothScroll, $timeout, projects, experiments, $window) {
			$scope.goToPage = function(pageID) {
		        smoothScroll.scrollTo(pageID);
			};

			$scope.location = $location;

			$scope.projects = projects;

			console.log(projects);
			$scope.experiments = experiments;

			$scope.profileImageToggled = false;

			$scope.skills = {
				GIT: {name: 'GIT SUBVERSION', title: 'GIT Subversion', img: '/images/git-logo.png'},
				SVN: {name: 'SUBVERSION', title: 'Subversion', img: '/images/svn-logo.png'},
				GRUNT: {name: 'GRUNT', title: 'Grunt', img: '/images/grunt-logo2.png'},
				BOWER: {name: 'BOWER', title: 'Bower', img: '/images/bower-logo.png'},
				HTML5: {name: 'HTML5', title: 'HTML5', img: '/images/HTML5_Logo.png'},
				CSS3: {name: 'CSS3', title: 'CSS3', img: '/images/css3logo.png'},
				JS: {name: 'JAVASCRIPT', title: 'Javascript', img: '/images/js-logo.png'},
				ANGULARJS: {name: 'ANGULARJS', title: 'AngularJS', img: '/images/AngularJS-logo.png'},
				SCSS: {name: 'SASS/SCSS', title: 'SASS', img: '/images/sass-logo.png'},
				LARAVEL: {name: 'LARAVEL', title: 'LARAVEL', img: '/images/laravel_logo.png'},
				MYSQL: {name: 'MYSQL', title: 'MySQL', img: '/images/mysql-logo.png'},
				MSSQL: {name: 'MSSQL', title: 'MSSQL', img: '/images/mssql-logo.png'},
				MONGODB: {name: 'MONGODB', title: 'MongoDB', img: '/images/mongo-logo.png'},
				ELASTICSEARCH: {name: 'ELASTIC SEARCH', title: 'Elastic Search', img: '/images/elasticsearch-logo.png'},
				DOTNETNUKE: {name: 'DOTNETNUKE', title: 'DotNetNuke', img: '/images/dnn-logo.png'},
				PHP: {name: 'PHP', title: 'PHP', img: '/images/php-logo.png'},
				WORDPRESS: {name: 'WORDPRESS', title: 'Wordpress', img: '/images/wordpress-logo.png'},
				AS3: {name: 'ACTION SCRIPT 3', title: 'Action Script', img: '/images/'},
				FLASH: {name: 'FLASH', title: 'Flash', img: '/images/flash-logo.png'},
				JIRA: {name: 'JIRA', title: 'Jira', img: '/images/jira-logo.png'},
				COMPOSER: {name: 'COMPOSER', title: 'Composer', img: '/images/composer-logo.png'},
				TFS: {name: 'TFS', title: 'Team Foundation Server', img: '/images/tfs-logo.png'},
				MERCURIAL: {name: 'MERCURIAL', title: 'Mercurial', img: '/images/mercurial-logo.png'},
				BASECAMP: {name: 'BASECAMP', title: 'Basecamp', img: '/images/basecamp-logo.png'},
				NODE: {name: 'NODE', title: 'NodeJS', img: '/images/node-logo.png'},
				SOCKETIO: {name: 'SOCKETIO', title: 'Socket IO', img: '/images/socketio-logo.gif'},
			};

			$scope.openTab = function(url) {
				$window.open(url, '_blank')
			}
		}
	]);
