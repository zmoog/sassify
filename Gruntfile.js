module.exports = function(grunt) {

  var path = grunt.option('path')

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          base: 'public'
	      }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'public/css/main.css': 'public/css/scss/main.scss',
        }
      }
    },
    jshint: {
      files: ['js/*.js'],
    },
		watch: {
		  options: {
		    livereload: true,
		  },
		  html: {
		    files: ['public/index.html'],

		  },
		  js: {
		    files: ['public/js/**/*.js'],
		    tasks: ['jshint'],
		  },
		  sass: {
		    files: ['public/css/scss/**/*.scss'],
		    tasks: ['sass'],
		  },
		  css: {
		    files: ['public/dist/css/*.css'],
		    tasks: [],
		  }
		}
  });

  // Actually running things.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);

};
