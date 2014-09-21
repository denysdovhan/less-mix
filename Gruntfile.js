module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Compile less-files
		less: {
			// Task for development
			development: {
				files: {
					// target.css file: source.less file
					'docs/dist/css/styles.css': 'docs/source/less/styles.less'
				}
			},
			// Release task
			release: {
				options: {
					compress: true,
					yuicompress: true
				},
				files: {
					// target.css file: source.less file
					'docs/dist/css/styles.css': 'docs/source/less/styles.less'
				}
			}
		},

		// Copy scripts and icons to `dest` folder
		copy: {
			js: {
				files: [{
					cwd: 'docs/source/js',
					src: ['**/*.js'],
					dest: 'docs/dist/js',
					expand: true
				}]
			},
			icons: {
				files: [{
					cwd: 'docs/source/ico',
					src: ['**/*.png'],
					dest: 'docs/dist/ico',
					expand: true
				}]
			}
		},

		// Run site on http://localhost:3000/
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 3000,
					base: 'docs/dist',
				}
			}
		},

		// Task that insert GoogleAnalytics append `body`
		dom_munger: {
			release: {
				options: {
					append: {
						selector:'body',
						html:'\t\t<script>(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)	})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');	ga(\'create\', \'UA-40496885-2\', \'denysdovhan.github.io\');	ga(\'send\', \'pageview\');</script>\n'
					},
				},
				src: 'docs/source/index.html',
				dest: 'docs/dist/index.html'
			}
		},

		// Watch task for development
		watch: {
			development: {
				files: ['docs/source/**/*'],
				tasks: ['less:development', 'copy']
			}
		}
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-dom-munger');

	// Default task
	grunt.registerTask('default', [
		'connect',
		'less:development',
		'copy',
		'watch'
	]);

	// Release task
	grunt.registerTask('release', [
		'less:release',
		'copy',
		'dom_munger'
	]);

};