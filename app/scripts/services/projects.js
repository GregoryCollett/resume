'use strict';

angular.module('meApp')
	.factory('projects', ['smoothScroll', '$timeout', function(smoothScroll, $timeout) {
		var Project = function(cfg) {
			angular.extend(this, cfg);
			this.toggled = false;
		};

		Project.prototype.toggle = function() {
			this.toggled = !this.toggled;
		};

		return {
			selected: null,
			list: [
			    new Project({
			    	id: 'r1', 
			    	title: 'Rustlup', 
			    	img: 'images/rustlup.png',
			    	url: 'http://www.rustlup.com',
			    	description: 'The aim of rustlup is to make it ridiculously easy to find, make and share nice things to eat.',
			    	position: 'Co-Founder, Web developer',
			    	role: '',
			    	issueManagement: 'JIRA',
			    	sourceControl: 'GIT',
			    	depencyManagment: ['COMPOSER', 'BOWER'],
			    	additionalSkills: ['GRUNT', 'ANGULARJS', 'LARAVEL', 'ELASTICSEARCH']
			    }),
			    new Project({
			    	id: 'd1', 
			    	title: 'DispatchaCab', 
			    	img: 'images/my11.png',
			    	description: 'DispatchaCab a revolutionary cloud based taxi control/management suite (IN DEVELOPMENT)',
			    	position: 'Founder, Software Engineer',
			    	role: '',
			    	issueManagement: 'BASECAMP',
			    	sourceControl: 'GIT',
			    	depencyManagment: ['BOWER'],
			    	additionalSkills: ['ANGULARJS', 'SOCKETIO', 'GRUNT', 'SCSS']
			    }),
			    new Project({
			    	id: 'c1',
			    	title: 'Chunky WS',
			    	description: 'Chunky is a browser based synthesizer utilizing the Web Audio API',
			    	position: 'Experiment Founder, R & D',
			    	issueManagement: 'GIT',
			    	sourceControl: 'GIT',
			    	depencyManagment: ['BOWER'],
			    	additionalSkills: ['GRUNT', 'ANGULARJS', 'SCSS', 'HTML5']
			    }),
			    new Project({
			    	id: 'y1', 
			    	title: 'YOA Workspace', 
			    	img: 'images/my11.png',
			    	description: 'Bespoke ERP system created to cater for the needs of YOA Insurance',
			    	position: 'Lead front-end developer',
			    	role: '',
			    	issueManagement: 'TFS',
			    	sourceControl: 'TFS',
			    	additionalSkills: ['HTML5', 'CSS3', 'ANGULARJS']
			    }),
			    new Project({
			    	id: 'm1',
			    	title: 'My11 Predictor Game', 
			    	img: 'images/my11.png',
			    	url: 'http://www.my11.com',
			    	description: 'MY11.com WhiteLabel predictor game',
			    	position: 'Web developer',
			    	role: '',
			    	issueManagement: 'BASECAMP',
			    	sourceControl: 'MERCURIAL',
			    	additionalSkills: ['HTML5', 'CSS3', 'C#', 'DOTNETNUKE', 'ASP']
			    }),
			    new Project({
			    	id: 'm2',
			    	title: 'My11 Site 2.0', 
			    	img: 'images/my11.png',
			    	url: 'http://www.my11.com',
			    	description: 'MY11.com leading fantasy football game site revamped!',
			    	position: 'Web developer',
			    	role: '',
			    	issueManagement: 'BASECAMP',
			    	sourceControl: 'MERCURIAL',
			    	additionalSkills: ['HTML5', 'CSS3', 'DOTNETNUKE', 'MSSQL', 'C#']
			    }),
			    new Project({
			    	id: 'm3',
			    	title: 'My11 Site 1.0', 
			    	img: 'images/my11.png',
			    	url: 'http://www.my11.com',
			    	description: 'MY11.com leading fantasy football game site',
			    	position: 'Web developer',
			    	role: '',
			    	issueManagement: 'BASECAMP',
			    	sourceControl: 'MERCURIAL',
			    	additionalSkills: ['HTML5', 'CSS3', 'WORDPRESS', 'PHP', 'MYSQL']
			    }),
			    new Project({
			    	id: 'm4',
			    	title: 'My11 Ad Localization', 
			    	img: 'images/my11.png',
			    	url: 'http://www.my11.com',
			    	description: 'Localize & amend ads created by third party',
			    	position: 'Web developer',
			    	role: '',
			    	issueManagement: 'BASECAMP',
			    	sourceControl: 'MERCURIAL',
			    	additionalSkills: ['FLASH']
			    }),
			    
			    // {id: 'p4', 'title': 'YOA Reports', src: 'images/pm-reports-reportview.png'},
			    // {id: 'p5', 'title': 'YOA BPM', src: 'images/yoainsurance.png'},
			    // {id: 'p6', 'title': 'YOA CRM', src: 'images/sugarcrm.png'},
			    // {id: 'p7', 'title': 'Go Interactive', src: 'images/gointeractive.png'},
			    // {id: 'p8', 'title': 'Digimedio', src: 'images/digimedio.png'},
			    // {id: 'p9', 'title': 'Forge Architects', src: 'images/forgearchitects.png'},
			    // {id: 'p10', 'title': 'Sales Angels CRM', src: 'images/sugarcrm.png'},
			    // {id: 'e1', 'title': 'HTML5 Simon', src:'http://lorempixel.com/200/200/' },
			    // {id: 'e2', 'title': 'Drumma', src: 'http://lorempixel.com/200/200/'},
			    // {id: 'e3', 'title': 'SVG Interactive Globe', src: 'http://lorempixel.com/200/200/'},
			    // {id: 'e4', 'title': 'Angular SugarCRM Portal', src: 'http://lorempixel.com/200/200'},
			    // {id: 'e5', 'title': 'CSS3 Monsters', src: 'http://lorempixel.com/200/200'},
			],
			select: function(_id) {
				this.selected = _.findWhere(this.list, {id: _id});
				$timeout(function() {
					smoothScroll.scrollTo('page-project');
				}, 30);
			},
			close: function() {
				this.selected = null;
				smoothScroll.scrollTo('page-projects');
			}
		};
	}]);