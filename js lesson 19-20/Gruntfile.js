module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        outputStyle: 'compressed',
        sourceMap: true
      },
      all: {
        files: {
          'css/application.css': 'scss/application.scss'
        }
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer-core')({
            browsers: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie >6']
          })
        ]
      },
      all: {
        src: 'css/*.css'
      }
    },

    imagemin: {
      all: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/'
        }]
      }
    },

    /** Sprites
     * https://github.com/Ensighten/grunt-spritesmith
     * Uses guide http://corp.web4pro.net/frontend/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-grunt%D0%BE%D0%BC/#grunt-spritesmith
     */
    sprite:{
      all: {
        src: 'images/icons/*.png', // Path to the icons
        retinaSrcFilter: 'images/icons/*@2x.png', // Path to the icon for the retina, it is important to place them in the same directory as the usual icons, with the addition of @ 2x
        dest: 'images/sprites.png', // Specify the path where the generated sprite
        retinaDest: 'images/sprites@2x.png', // Specify the path where the generated retina sprite
        destCss: 'scss/setup/_sprites.scss', // Specify the path where the generated scss
        imgPath: '../images/sprites.png',
        retinaImgPath: '../images/sprites@2x.png', // Specify the path that will be in scss (by default is relative the generated file .scss)
        padding: 10 // padding in sprite
      }
    },

    watch: {
      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass', 'postcss']
      },
      sprite: {
        files: 'images/icons/*.png',
        tasks: ['sprite', 'sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-spritesmith');

  grunt.registerTask('default', ['sass', 'postcss', 'sprite']);

};