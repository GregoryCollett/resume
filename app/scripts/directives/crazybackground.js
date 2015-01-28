'use strict';

angular.module('meApp')
	.directive('crazy', [
		function() {
			return {
				restrict: 'EA',
				replace: true,
				template: '<canvas></canvas>',
				link: function(scope, elem, attr) {
					var canvas = elem;
					var height = canvas.height();
					var width = canvas.width();
					var ctx = canvas[0].getContext('2d');

					var textables = ['JS', 'HTML5', 'PHP', 'ANGULARJS', 'POLYMER', 
					'LARAVEL', 'FUEL', 'ZEND', 'MYSQL', 'MONGO', 'ELASTICSEARCH', 
					'NODE', 'EXPRESS', 'SAILSJS', 'PYTHON', 'BASH', 'SHELL',
					'GIT', 'SVN', 'SUGARCRM', 'PROCESSMAKER'];

					var x, y, i;

					function draw() {
						ctx.clearRect(0, 0, 500, 500);
						ctx.font = '10pt Calibri';
						ctx.fillStyle = 'white';

						
						for (i = 0; i < textables.length; i++) {
							x = (Math.random() * width) / 2;    
							y = (Math.random() * height) / 2;
							ctx.fillText(textables[i], x, y);
						}
					}

					setInterval(function() {
						draw();
					},1000);
				}
			};
		}
	]);