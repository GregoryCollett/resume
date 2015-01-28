'use strict';

angular.module('meApp')
	.factory('experiments', ['smoothScroll', '$timeout', function(smoothScroll, $timeout) {
		return {
			selected: null,
			list: [
			    {id: 'e1', 'title': 'HTML5 Simon', src:'http://lorempixel.com/200/200/' },
			    {id: 'e2', 'title': 'Drumma', src: 'http://lorempixel.com/200/200/'},
			    {id: 'e3', 'title': 'SVG Interactive Globe', src: 'http://lorempixel.com/200/200/'},
			    {id: 'e4', 'title': 'Angular SugarCRM Portal', src: 'http://lorempixel.com/200/200'},
			    {id: 'e5', 'title': 'CSS3 Monsters', src: 'http://lorempixel.com/200/200'},
			],
			select: function(_id) {
				this.selected = _.findWhere(this.list, {id: _id});
				$timeout(function() {
					smoothScroll.scrollTo('page-experiment');
				}, 30);
			},
			close: function() {
				smoothScroll.scrollTo('page-experiments');
				this.selected = null;
			}
		};
	}]);