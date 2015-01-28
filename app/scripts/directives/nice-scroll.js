'use strict';

angular.module('meApp')
	.directive('niceScroll', [
		function() {
			return {
				restrict: 'ECA',
				link: function(scope, elem, attr) {
					var options = {
			          styler: 'fb',
			          cursorcolor: '#5cb85c',
			          cursorwidth: '5',
			          cursorborderradius: '10px',
			          background: '#e7e7e7',
			          spacebarenabled: false,
			          cursorborder: ''
			        };
			        elem.niceScroll(options);
			        scope.$watch(function () {
			          scope.__height = elem[0].scrollHeight;
			        });
			        scope.$watch('__height', function (n, o) {
			          if (n > o) {
			            elem.getNiceScroll().resize();
			          }
			        });
				} 
			};
		}
	]);