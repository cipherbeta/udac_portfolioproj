module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'gm',
          sizes: [
            {
              width: 360,
              suffix: '_360w_1x',
              quality: 40},
            {
              width: 640,
              suffix: '_360w_2x',
              quality: 40},
            {
              width: 960,
              suffix: '_360w_3x',
              quality: 40},
            {
              width: 640,
              suffix: '_640w_1x',
              quality: 40},
            {
              width: 960,
              suffix: '_640w_2x',
              quality: 40},
            {
              width: 1280,
              suffix: '_640w_3x',
              quality: 40 },
            {
              width: 960,
              suffix: '_960w_1x',
              quality: 40 },
            {
              width: 1280,
              suffix: '_960w_2x',
              quality: 40 },
            {
              width: 1600,
              suffix: '_960w_3x',
              quality: 40 },
            {
              width: 1280,
              suffix: '_1280w_1x',
              quality: 40 },
            {
              width: 1600,
              suffix: '_1280w_2x',
              quality: 40 },
            {
              width: 1920,
              suffix: '_1280w_3x',
              quality: 40 },
          ]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img_src/',
          dest: 'img/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['img'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['img']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
