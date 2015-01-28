'use strict';

angular.module('meApp')
	.controller('contactController', [
		'$scope',
		function($scope) {
			$scope.contact = {
				name: '',
				email: '',
				message: ''
			};
		}
	]);