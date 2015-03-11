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
				GIT: {name: 'GIT SUBVERSION', title: 'GIT Subversion', img: 'images/git-logo.png', url: 'http://git-scm.com/', level: '90%'},
				SVN: {name: 'SUBVERSION', title: 'Subversion', img: 'images/svn-logo.png', url: 'https://subversion.apache.org/', level: '80%'},
				GRUNT: {name: 'GRUNT', title: 'Grunt', img: 'images/grunt-logo2.png', url: 'http://gruntjs.com/', level: '95%'},
				BOWER: {name: 'BOWER', title: 'Bower', img: 'images/bower-logo.png', url: 'http://bower.io/', level: '100%'},
				HTML5: {name: 'HTML5', title: 'HTML5', img: 'images/HTML5_Logo.png', url: 'http://www.w3.org/TR/html5/', level: '100%'},
				CSS3: {name: 'CSS3', title: 'CSS3', img: 'images/css3logo.png', url: '', level: '100%'},
				JS: {name: 'JAVASCRIPT', title: 'Javascript', img: 'images/js-logo.png', url: '', level: '90%'},
				ANGULARJS: {name: 'ANGULARJS', title: 'AngularJS', img: 'images/AngularJS-logo.png', url: 'https://angularjs.org/', level: '90%'},
				SCSS: {name: 'SASS/SCSS', title: 'SASS', img: 'images/sass-logo.png', url: 'http://sass-lang.com/', level: '95%'},
				LARAVEL: {name: 'LARAVEL', title: 'Laravel', img: 'images/laravel_logo.png', url: 'http://laravel.com/', level: '95%'},
				MYSQL: {name: 'MYSQL', title: 'MySQL', img: 'images/mysql-logo.png', url: 'http://www.mysql.com/', level: '75%'},
				MSSQL: {name: 'MSSQL', title: 'MSSQL', img: 'images/mssql-logo.png', url: '', level: '75%'},
				MONGODB: {name: 'MONGODB', title: 'MongoDB', img: 'images/mongo-logo.png', url: 'http://www.mongodb.org/', level: '85%'},
				ELASTICSEARCH: {name: 'ELASTIC SEARCH', title: 'Elastic Search', img: 'images/elasticsearch-logo.png', url: 'http://www.elasticsearch.org/', level: '70%'},
				DOTNETNUKE: {name: 'DOTNETNUKE', title: 'DotNetNuke', img: 'images/dnn-logo.png', url: 'http://www.dnnsoftware.com/', level: '80%'},
				PHP: {name: 'PHP', title: 'PHP', img: 'images/php-logo.png', url: 'http://php.net/', level: '90%'},
				WORDPRESS: {name: 'WORDPRESS', title: 'Wordpress', img: 'images/wordpress-logo.png', url: 'https://wordpress.com/', level: '60%'},
				AS3: {name: 'ACTION SCRIPT 3', title: 'Action Script', img: 'images/', url: 'http://en.wikipedia.org/wiki/ActionScript', level: '75%'},
				FLASH: {name: 'FLASH', title: 'Flash', img: 'images/flash-logo.png', url: 'http://en.wikipedia.org/wiki/Adobe_Flash', level: '70%'},
				JIRA: {name: 'JIRA', title: 'Jira', img: 'images/jira-logo.png', url: 'https://www.atlassian.com/software/jira', level: '99%'},
				COMPOSER: {name: 'COMPOSER', title: 'Composer', img: 'images/composer-logo.png', url: 'https://getcomposer.org/', level: '100%'},
				TFS: {name: 'TFS', title: 'Team Foundation Server', img: 'images/tfs-logo.png', url: 'http://en.wikipedia.org/wiki/Team_Foundation_Server', level: '95%'},
				MERCURIAL: {name: 'MERCURIAL', title: 'Mercurial', img: 'images/mercurial-logo.png', url: 'http://mercurial.selenic.com/', level: '95%'},
				BASECAMP: {name: 'BASECAMP', title: 'Basecamp', img: 'images/basecamp-logo.png', url: 'https://basecamp.com/', level: '100%'},
				NODE: {name: 'NODE', title: 'NodeJS', img: 'images/node-logo.png', url: 'http://nodejs.org/', level: '90%'},
				SOCKETIO: {name: 'SOCKETIO', title: 'Socket IO', img: 'images/socketio-logo.gif', url: 'http://socket.io/', level: '98%'},
				PROCESSMAKER: {name: 'PROCESSMAKER', title: 'Process Maker', img: 'images/processmaker.png', url: 'http://processmaker.com/', level: '97%'},
			};

			$scope.openTab = function(url) {
				$window.open(url, '_blank')
			}
		}
	]);
