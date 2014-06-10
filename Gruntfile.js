module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({


    compass: {
      dev: {
        options: {
          sourcemap: true,
          config: 'config.rb',
          force: true
        }
      }
    },

    uglify: {
      dev: {
        options: {
          sourceMap: true,
          sourceMapName: 'js/sourcemap.map'
        },
        files: {
          'js/scripts.min.js': ['js/**/*.js', '!js/scripts.min.js']
        }
      }
    },

    watch: {
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['compass:dev', 'notify:compass']
      },
      /* watch and see if our javascript files change, or new packages are installed */
      js: {
        files: ['js/**/*.js', '!js/scripts.min.js'],//['js/main.js'],//, 'js/**/*.js'],
        tasks: ['uglify', 'notify:uglify']
      }
      /* watch our files for change, reload */
      /*livereload: {
        files: ['css/*.css', 'img/*', 'js/{main.min.js, plugins.min.js}'],
        options: {
          livereload: true
        }
      },*/
    },

    notify: {
      compass: {
        options: {
          enabled: true,  
          title: 'Task Complete',  // optional
          message: 'Compass finished', //required
        }
      },
      uglify: {
        options: {
          enabled: true,  
          title: 'Task Complete',  // optional
          message: 'JS Compiled', //required
        }
      },
    },

  });

  grunt.registerTask('default', [
    'watch',
  ]);


}