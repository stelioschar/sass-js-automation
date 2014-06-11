module.exports = {
  compile: {
  	options: {
      sourceMap: true,
      sourceMapDir: 'js'
    },
    files: {
      'js/coffee-main.js': ['coffeescript/*.coffee']
    }
  }
}