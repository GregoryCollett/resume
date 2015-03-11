"use strict";angular.module("meApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","akoenig.deckgrid","scroll-animate-directive"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html"}).otherwise({redirectTo:"/"})}]),angular.module("meApp").controller("mainController",["$scope","$location","smoothScroll","$timeout","projects","experiments","$window",function(a,b,c,d,e,f,g){a.goToPage=function(a){c.scrollTo(a)},a.location=b,a.projects=e,console.log(e),a.experiments=f,a.profileImageToggled=!1,a.skills={GIT:{name:"GIT SUBVERSION",title:"GIT Subversion",img:"images/git-logo.png",url:"http://git-scm.com/"},SVN:{name:"SUBVERSION",title:"Subversion",img:"images/svn-logo.png",url:"https://subversion.apache.org/"},GRUNT:{name:"GRUNT",title:"Grunt",img:"images/grunt-logo2.png",url:"http://gruntjs.com/"},BOWER:{name:"BOWER",title:"Bower",img:"images/bower-logo.png",url:"http://bower.io/"},HTML5:{name:"HTML5",title:"HTML5",img:"images/HTML5_Logo.png",url:"http://www.w3.org/TR/html5/"},CSS3:{name:"CSS3",title:"CSS3",img:"images/css3logo.png",url:""},JS:{name:"JAVASCRIPT",title:"Javascript",img:"images/js-logo.png",url:""},ANGULARJS:{name:"ANGULARJS",title:"AngularJS",img:"images/AngularJS-logo.png",url:"https://angularjs.org/"},SCSS:{name:"SASS/SCSS",title:"SASS",img:"images/sass-logo.png",url:"http://sass-lang.com/"},LARAVEL:{name:"LARAVEL",title:"LARAVEL",img:"images/laravel_logo.png",url:"http://laravel.com/"},MYSQL:{name:"MYSQL",title:"MySQL",img:"images/mysql-logo.png",url:"http://www.mysql.com/"},MSSQL:{name:"MSSQL",title:"MSSQL",img:"images/mssql-logo.png",url:""},MONGODB:{name:"MONGODB",title:"MongoDB",img:"images/mongo-logo.png",url:"http://www.mongodb.org/"},ELASTICSEARCH:{name:"ELASTIC SEARCH",title:"Elastic Search",img:"images/elasticsearch-logo.png",url:"http://www.elasticsearch.org/"},DOTNETNUKE:{name:"DOTNETNUKE",title:"DotNetNuke",img:"images/dnn-logo.png",url:"http://www.dnnsoftware.com/"},PHP:{name:"PHP",title:"PHP",img:"images/php-logo.png",url:"http://php.net/"},WORDPRESS:{name:"WORDPRESS",title:"Wordpress",img:"images/wordpress-logo.png",url:"https://wordpress.com/"},AS3:{name:"ACTION SCRIPT 3",title:"Action Script",img:"images/",url:"http://en.wikipedia.org/wiki/ActionScript"},FLASH:{name:"FLASH",title:"Flash",img:"images/flash-logo.png",url:"http://en.wikipedia.org/wiki/Adobe_Flash"},JIRA:{name:"JIRA",title:"Jira",img:"images/jira-logo.png",url:"https://www.atlassian.com/software/jira"},COMPOSER:{name:"COMPOSER",title:"Composer",img:"images/composer-logo.png",url:"https://getcomposer.org/"},TFS:{name:"TFS",title:"Team Foundation Server",img:"images/tfs-logo.png",url:"http://en.wikipedia.org/wiki/Team_Foundation_Server"},MERCURIAL:{name:"MERCURIAL",title:"Mercurial",img:"images/mercurial-logo.png",url:"http://mercurial.selenic.com/"},BASECAMP:{name:"BASECAMP",title:"Basecamp",img:"images/basecamp-logo.png",url:"https://basecamp.com/"},NODE:{name:"NODE",title:"NodeJS",img:"images/node-logo.png",url:"http://nodejs.org/"},SOCKETIO:{name:"SOCKETIO",title:"Socket IO",img:"images/socketio-logo.gif",url:"http://socket.io/"},PROCESSMAKER:{name:"PROCESSMAKER",title:"Process Maker",img:"images/processmaker.png",url:"http://processmaker.com/"}},a.openTab=function(a){g.open(a,"_blank")}}]),angular.module("meApp").controller("contactController",["$scope",function(a){a.contact={name:"",email:"",message:""}}]),angular.module("meApp").service("smoothScroll",function(){this.scrollTo=function(a){function b(){return self.pageYOffset?self.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0}function c(a){for(var b=document.getElementById(a),c=b.offsetTop,d=b;d.offsetParent&&d.offsetParent!==document.body;)d=d.offsetParent,c+=d.offsetTop;return c}var d=b(),e=c(a),f=e>d?e-d:d-e;if(100>f)return void scrollTo(0,e);var g=Math.round(f/20);g>=20&&(g=20);var h=Math.round(f/25),i=e>d?d+h:d-h,j=0;if(e>d)for(var k=d;e>k;k+=h)setTimeout("window.scrollTo(0, "+i+")",j*g),i+=h,i>e&&(i=e),j++;else for(var l=d;l>e;l-=h)setTimeout("window.scrollTo(0, "+i+")",j*g),i-=h,e>i&&(i=e),j++}}),angular.module("meApp").factory("projects",["smoothScroll","$timeout",function(a,b){var c=function(a){angular.extend(this,a),this.toggled=!1};return c.prototype.toggle=function(){this.toggled=!this.toggled},{selected:null,list:[new c({id:"r1",title:"Rustlup",img:"images/rustlup.png",url:"http://www.rustlup.com",description:"The aim of rustlup is to make it ridiculously easy to find, make and share nice things to eat.",position:"Co-Founder, Web developer",role:"",issueManagement:"JIRA",sourceControl:"GIT",depencyManagment:["COMPOSER","BOWER"],additionalSkills:["GRUNT","ANGULARJS","LARAVEL","ELASTICSEARCH"]}),new c({id:"d1",title:"DispatchaCab",img:"images/my11.png",description:"DispatchaCab a revolutionary cloud based taxi control/management suite (IN DEVELOPMENT)",position:"R & D, Software Engineer",role:"",issueManagement:"BASECAMP",sourceControl:"GIT",depencyManagment:["BOWER"],additionalSkills:["ANGULARJS","SOCKETIO","GRUNT","SCSS"]}),new c({id:"c1",title:"Chunky WS",description:"Chunky is a browser based synthesizer utilizing the Web Audio API",position:"Experiment Founder, R & D",issueManagement:"GIT",sourceControl:"GIT",depencyManagment:["BOWER"],additionalSkills:["GRUNT","ANGULARJS","SCSS","HTML5"]}),new c({id:"y1",title:"YOA Workspace",img:"images/my11.png",description:"Bespoke ERP system created to cater for the needs of YOA Insurance",position:"Lead front-end developer",role:"",issueManagement:"TFS",sourceControl:"TFS",additionalSkills:["HTML5","CSS3","ANGULARJS"]}),new c({id:"m1",title:"My11 Predictor Game",img:"images/my11.png",url:"http://www.my11.com",description:"MY11.com White label predictor game",position:"Web developer",role:"",issueManagement:"BASECAMP",sourceControl:"MERCURIAL",additionalSkills:["HTML5","CSS3","C#","DOTNETNUKE","ASP"]}),new c({id:"y2",title:"YOA BPM",img:"images/yoa.png",description:"YOA Sales process, a proven workflow that increased sales by 20%",position:"Web Developer",issueManagement:"BASECAMP",sourceControl:"GIT",additionalSkills:["PHP","PROCESSMAKER"]}),new c({id:"m2",title:"My11.com",img:"images/my11.png",url:"http://www.my11.com",description:"MY11.com worldwide fantasy football game site!",position:"Web developer",role:"",issueManagement:"BASECAMP",sourceControl:"MERCURIAL",additionalSkills:["HTML5","CSS3","DOTNETNUKE","MSSQL","C#"]})],select:function(c){this.selected=_.findWhere(this.list,{id:c}),b(function(){a.scrollTo("page-project")},30)},close:function(){this.selected=null,a.scrollTo("page-projects")}}}]),angular.module("meApp").factory("experiments",["smoothScroll","$timeout",function(a,b){return{selected:null,list:[{id:"e1",title:"HTML5 Simon",src:"http://lorempixel.com/200/200/"},{id:"e2",title:"Drumma",src:"http://lorempixel.com/200/200/"},{id:"e3",title:"SVG Interactive Globe",src:"http://lorempixel.com/200/200/"},{id:"e4",title:"Angular SugarCRM Portal",src:"http://lorempixel.com/200/200"},{id:"e5",title:"CSS3 Monsters",src:"http://lorempixel.com/200/200"}],select:function(c){this.selected=_.findWhere(this.list,{id:c}),b(function(){a.scrollTo("page-experiment")},30)},close:function(){a.scrollTo("page-experiments"),this.selected=null}}}]),angular.module("meApp").directive("crazy",[function(){return{restrict:"EA",replace:!0,template:"<canvas></canvas>",link:function(a,b){function c(){for(j.clearRect(0,0,500,500),j.font="10pt Calibri",j.fillStyle="white",f=0;f<k.length;f++)d=Math.random()*i/2,e=Math.random()*h/2,j.fillText(k[f],d,e)}var d,e,f,g=b,h=g.height(),i=g.width(),j=g[0].getContext("2d"),k=["JS","HTML5","PHP","ANGULARJS","POLYMER","LARAVEL","FUEL","ZEND","MYSQL","MONGO","ELASTICSEARCH","NODE","EXPRESS","SAILSJS","PYTHON","BASH","SHELL","GIT","SVN","SUGARCRM","PROCESSMAKER"];setInterval(function(){c()},1e3)}}}]),angular.module("meApp").directive("particler",[function(){return{restrict:"ECA",template:"<canvas></canvas>",replace:!0,scope:{background:"@",colors:"=",spawn:"="},link:function(a,b){var c,d=b,e=d.height(),f=d.width(),g=d[0].getContext("2d"),h=600,i=150,j=30,k=a.colors||["#f4f3f3","#F29494"],l=a.spawn?1e3/a.spawn:10,m=[],n=function(){m.push({x:f/4,y:e/4,v:{x:(i<<1)*Math.random()-i,y:(i<<1)*Math.random()-i},s:Math.random()*j,a:1,c:k[Math.floor(Math.random()*k.length)]})},o=function(){g.clearRect(0,0,f,e);for(var a=0;a<m.length;a++){var b=m[a];g.globalAlpha=b.a,g.fillStyle=b.c,g.beginPath(),g.arc(b.x,b.y,b.s,0,2*Math.PI),g.fill()}},p=0,q=function(a){for(p+=a;p>l;)p-=l,n();var b=m.length-h;b>0&&m.splice(0,b);for(var c=0;c<m.length;c++){var d=m[c];d.x+=d.v.x*a/1e3,d.y+=d.v.y*a/1e3,d.a*=.99}},r=!1,s=function(a){c||(c=a);var b=a-c;c=a,q(b),o(),r||window.requestAnimationFrame(s)};window.requestAnimationFrame(s)}}}]),angular.module("meApp").directive("niceScroll",[function(){return{restrict:"ECA",link:function(a,b){var c={styler:"fb",cursorcolor:"#5cb85c",cursorwidth:"5",cursorborderradius:"10px",background:"#e7e7e7",spacebarenabled:!1,cursorborder:""};b.niceScroll(c),a.$watch(function(){a.__height=b[0].scrollHeight}),a.$watch("__height",function(a,c){a>c&&b.getNiceScroll().resize()})}}}]);