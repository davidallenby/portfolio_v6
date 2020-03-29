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
    
    uglify: {
      options: {
        mangle: true
      },
      build: {
        files: [{
          expand: true,
          src: 'js/src/*.js',
          dest: 'js/dist',
          cwd: '.',
          rename: function(dst, src) {
            var lastslashindex = src.lastIndexOf('/');
            var srcFilename = src.substring(lastslashindex + 1);
            return dst + '/' + srcFilename.replace('.js', '.min.js');
          }
        }]
      }
    },

		watch: {
			styles: {
				files: ['css/src/**/*.scss'],
				tasks: ['clean','sass','postcss','cssmin']
      },
      js: {
        files: ['js/src/**/*.js'],
        tasks: ['uglify']
      }
		}
	
  });

  grunt.registerTask('default', ['clean','sass','postcss','cssmin','uglify','watch']);

  grunt.registerTask('build', ['clean','sass','postcss','cssmin','uglify']);
};