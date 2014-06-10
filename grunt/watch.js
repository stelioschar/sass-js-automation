module.exports = {
  sprites: {
    files: ['img/my-icons/*.png'],
    tasks: ['compass:sprites', 'notify:compass']
  },
  compass: {
    files: ['sass/**/*.scss'],
    tasks: ['compass:sass', 'notify:sass']
  },
  /* watch and see if our javascript files change, or new packages are installed */
  js: {
    files: ['js/**/*.js', '!js/scripts.min.js'],//['js/main.js'],//, 'js/**/*.js'],
    tasks: ['uglify', 'notify:uglify']
  }   
}
