module.exports = function(grunt) {

  grunt.initConfig({
    dev: {
      options: {
        engine:"im",
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
      files: [{
        expand: true,
        src: ['*.{gif,jpg,png}'],
        cwd: 'img_src/',
        dest: 'img/'
      }]
    },
  {
    clean: {
      dev: {
        src: ['images'],
      },
    },
  },
  mkdir: {
    dev: {
      options: {
        create: ['images']
      },
    },
  },
});

grunt.loadNPMTasks('grunt-responsive-images');
grunt.loadNPMTasks('grunt-contrib-clean');
grunt.loadNPMTasks('grunt-contrib-copy');
grunt.loadNPMTasks('grunt-mkdir');
grunt.loadNPMTasks('default', ['clean', 'mkdir', 'responsive_images']);
}

/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

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
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
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
