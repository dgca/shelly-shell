module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/main.css': 'css/main.scss'
        }
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer-core')({
            browsers: ['last 2 versions']
          })
        ]
      },
      dist: {
        src: 'css/main.css'
      }
    },
    watch: {
      css: {
        files: 'css/**/*.scss',
        tasks: ['sass', 'postcss:dist']
      }
    }
  });

  // Load plugins.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');

  // Grunt tasks.
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['sass', 'postcss:dist']);
};
