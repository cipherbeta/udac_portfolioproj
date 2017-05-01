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
    }
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
