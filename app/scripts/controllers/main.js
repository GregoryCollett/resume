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

			$scope.experiments = experiments;

			$scope.profileImageToggled = false;
			$scope.skillTypes = {
				current: 'all',
				list: {
					'all': {title: 'All'},
					'language': {title: 'Languages'},
					'database': {title: 'Databases'},
					'source-control': {title: 'Source Control'},
					'task-runner': {title: 'Task Runners'},
					'dependency-manager': {title: 'Dependency Managers'},
					'framework': {title: 'Frameworks'},
					'cms': {title: 'CMS'},
					'software': {title: 'Software'},
					'runtime': {title: 'Run Time Environments'},
				}
			};

			$scope.skills = {
				GIT: {types: ['source-control'], name: 'GIT SUBVERSION', title: 'GIT Subversion', img: 'images/git-logo.png', url: 'http://git-scm.com/', width: 90, level: '90%'},
				SVN: {types: ['source-control'], name: 'SUBVERSION', title: 'Subversion', img: 'images/svn-logo.png', url: 'https://subversion.apache.org/', width: 80, level: '80%'},
				GRUNT: {types: ['task-runner'], name: 'GRUNT', title: 'Grunt', img: 'images/grunt-logo2.png', url: 'http://gruntjs.com/', width: 95, level: '95%'},
				BOWER: {types: ['dependency-manager'], name: 'BOWER', title: 'Bower', img: 'images/bower-logo.png', url: 'http://bower.io/', width: 100, level: '100%'},
				HTML5: {types: ['language'], name: 'HTML5', title: 'HTML5', img: 'images/HTML5_Logo.png', url: 'http://www.w3.org/TR/html5/', width: 100, level: '100%'},
				CSS3: {types: ['language'], name: 'CSS3', title: 'CSS3', img: 'images/css3logo.png', url: '', width: 100, level: '100%'},
				JS: {types: ['language'], name: 'JAVASCRIPT', title: 'Javascript', img: 'images/js-logo.png', url: '', width: 90, level: '90%'},
				ANGULARJS: {types: ['framework'], name: 'ANGULARJS', title: 'AngularJS', img: 'images/AngularJS-logo.png', url: 'https://angularjs.org/', width: 90, level: '90%'},
				SCSS: {types: ['language'], name: 'SASS/SCSS', title: 'SASS', img: 'images/sass-logo.png', url: 'http://sass-lang.com/', width: 95, level: '95%'},
				LARAVEL: {types: ['framework'], name: 'LARAVEL', title: 'Laravel', img: 'images/laravel_logo.png', url: 'http://laravel.com/', width: 95, level: '95%'},
				MYSQL: {types: ['database'], name: 'MYSQL', title: 'MySQL', img: 'images/mysql-logo.png', url: 'http://www.mysql.com/', width: 75, level: '75%'},
				MSSQL: {types: ['database'], name: 'MSSQL', title: 'MSSQL', img: 'images/mssql-logo.png', url: '', width: 75, level: '75%'},
				MONGODB: {types: ['database'], name: 'MONGODB', title: 'MongoDB', img: 'images/mongo-logo.png', url: 'http://www.mongodb.org/', width: 85, level: '85%'},
				ELASTICSEARCH: {types: ['database'], name: 'ELASTIC SEARCH', title: 'Elastic Search', img: 'images/elasticsearch-logo.png', url: 'http://www.elasticsearch.org/', width: 70, level: '70%'},
				DOTNETNUKE: {types: ['cms'], name: 'DOTNETNUKE', title: 'DotNetNuke', img: 'images/dnn-logo.png', url: 'http://www.dnnsoftware.com/', width: 80, level: '80%'},
				PHP: {types: ['language'], name: 'PHP', title: 'PHP', img: 'images/php-logo.png', url: 'http://php.net/', width: 90, level: '90%'},
				WORDPRESS: {types: ['cms'], name: 'WORDPRESS', title: 'Wordpress', img: 'images/wordpress-logo.png', url: 'https://wordpress.com/', width: 60, level: '60%'},
				AS3: {types: ['language'], name: 'ACTION SCRIPT 3', title: 'Action Script', img: 'images/', url: 'http://en.wikipedia.org/wiki/ActionScript', width: 75, level: '75%'},
				FLASH: {types: ['software'], name: 'FLASH', title: 'Flash', img: 'images/flash-logo.png', url: 'http://en.wikipedia.org/wiki/Adobe_Flash', width: 70, level: '70%'},
				JIRA: {types: ['issue-manager'], name: 'JIRA', title: 'Jira', img: 'images/jira-logo.png', url: 'https://www.atlassian.com/software/jira', width: 99, level: '99%'},
				COMPOSER: {types: ['dependency-manager'], name: 'COMPOSER', title: 'Composer', img: 'images/composer-logo.png', url: 'https://getcomposer.org/', width: 100, level: '100%'},
				TFS: {types: ['source-control', 'issue-manager'], name: 'TFS', title: 'Team Foundation Server', img: 'images/tfs-logo.png', url: 'http://en.wikipedia.org/wiki/Team_Foundation_Server', width: 80, level: '80%'},
				MERCURIAL: {types: ['source-control'], name: 'MERCURIAL', title: 'Mercurial', img: 'images/mercurial-logo.png', url: 'http://mercurial.selenic.com/', width: 95, level: '95%'},
				BASECAMP: {types: ['issue-manager'], name: 'BASECAMP', title: 'Basecamp', img: 'images/basecamp-logo.png', url: 'https://basecamp.com/', width: 100, level: '100%'},
				NODE: {types: ['runtime'], name: 'NODE', title: 'NodeJS', img: 'images/node-logo.png', url: 'http://nodejs.org/', width: 90, level: '90%'},
				SOCKETIO: {types: ['framework'], name: 'SOCKETIO', title: 'Socket IO', img: 'images/socketio-logo.gif', url: 'http://socket.io/', width: 98, level: '98%'},
				PROCESSMAKER: {types: ['software'], name: 'PROCESSMAKER', title: 'Process Maker', img: 'images/processmaker.png', url: 'http://processmaker.com/', width: 90, level: '90%'},
			};

			$scope.skillsList = [];

			angular.forEach($scope.skills, function(obj, key){
				$scope.skillsList.push(obj);
			});

			$scope.openTab = function(url) {
				$window.open(url, '_blank')
			}
		}
	]);
