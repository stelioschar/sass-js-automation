module.exports = {
  sass: {
    files: ['sass/**/*.scss'],
    tasks: ['compass:dev', 'notify:watch']
  },
  /* watch and see if our javascript files change, or new packages are installed */
  js: {
    files: ['js/**/*.js', '!js/scripts.min.js'],//['js/main.js'],//, 'js/**/*.js'],
    tasks: ['uglify', 'notify:uglify']
  }  
}
