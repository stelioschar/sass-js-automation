module.exports = {
  sprites: {
    files: ['app/images/sprites/*.png'],
    tasks: ['compass:sprites', 'notify:compass']
  },
  compass: {
    files: ['app/scss/**/*.scss'],
    tasks: ['compass:sass', 'notify:sass']
  },
  autoprefixer: {
    files: ['app/styles/**/*.css'],
    tasks: ['autoprefixer', 'notify:autoprefixer']
  },
  coffee: {
    files: ['app/coffeescript/**/*.coffee'],
    tasks: ['coffee', 'notify:coffee']
  }  
}
