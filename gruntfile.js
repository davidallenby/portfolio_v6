module.exports = function(grunt){
	"use strict";
	require("matchdep").filter("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      files: [
        'css/dist/*',
        'js/dist/*'
      ]
    },

    sass: {
      styles: {
          files: {
          	'css/dist/styles.css':'css/src/styles.scss'
        }
      }
    },

		postcss: {

			options: {
			  processors: [
			    require('pixrem')(), // add fallbacks for rem units
			    require('autoprefixer')({browsers: ['last 2 versions', 'ie >= 10']}), // add vendor prefixes
			  ]
			},

			dist: {
				src: 'css/dist/*.css'
			}

		},

		cssmin: {
      styles: {
          files: {
              'css/dist/styles.min.css':'css/dist/styles.css'
          }
      }
		},

		watch: {
			styles: {
				files: ['css/src/**/*.scss'],
				tasks: ['sass','postcss','cssmin']
			}
		}
	
  });

  grunt.registerTask('default', ['clean','sass','postcss','cssmin','watch']);
  grunt.registerTask('build', ['clean','sass','postcss','cssmin']);
};