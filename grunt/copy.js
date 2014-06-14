module.exports = {
  build: {
    files: [
      {expand: true, cwd: 'app/images/', src: ['*.png'], dest: 'dist/images/', filter: 'isFile'}
    ]
  }
};