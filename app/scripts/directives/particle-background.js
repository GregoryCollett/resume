'use strict';

angular.module('meApp')
	.directive('particler', [
		function() {
			return {
				restrict: 'ECA',
				template: '<canvas></canvas>',
				replace: true,
				scope: {
					background: '@',
					colors: '=',
					spawn: '=',
				},
				link: function(scope, elem, attr) {
					var canvas = elem,
						height = canvas.height(),
						width = canvas.width(),
						ctx = canvas[0].getContext('2d'),
						maxCount = 600,
						maxSpeed = 150,
						maxSize = 30,
						colors = scope.colors || ['#f4f3f3', '#F29494'],
						spawnTime = scope.spawn ? 1000 / scope.spawn : 10,
						particles = [];

					var spawn = function() {
                        particles.push({
                            x: width / 4,
                            y: height / 4,
                            v: {
                                x: (maxSpeed << 1) * Math.random() - maxSpeed,
                                y: (maxSpeed << 1) * Math.random() - maxSpeed
                            },
                            s: Math.random() * maxSize,
                            a: 1,
                            c: colors[Math.floor(Math.random() * colors.length)]
                        });
                    };

                    var draw = function() {
                        ctx.clearRect(0, 0, width, height);
                        for (var i = 0; i < particles.length; i++) {
                            var p = particles[i];
                            ctx.globalAlpha = p.a;
                            ctx.fillStyle = p.c;
                            ctx.beginPath();
                            ctx.arc(p.x, p.y, p.s, 0, 2 * Math.PI);
                            ctx.fill();
                        }
                    };

                    var lastSpawned = 0;

                    var update = function(delta) {

                        lastSpawned += delta;
                        while (lastSpawned > spawnTime) {
                            lastSpawned -= spawnTime;
                            spawn();
                        }
                        var particleOverflow = particles.length - maxCount;
                        if (particleOverflow > 0) {
                            particles.splice(0, particleOverflow);
                        }

                        for (var i = 0; i < particles.length; i++) {
                            var p = particles[i];
                            p.x += p.v.x * delta / 1000;
                            p.y += p.v.y * delta / 1000;
                            p.a *= 0.99;
                        }
                    };

                    var finished = false;
                    var time;

                    var animate = function(elapsed) {
                        if (!time)
                            time = elapsed;

                        var delta = elapsed - time;
                        time = elapsed;
                        update(delta);
                        draw();

                        if (!finished) window.requestAnimationFrame(animate);
                    };

                    window.requestAnimationFrame(animate);
				}
			};
		}
	]);