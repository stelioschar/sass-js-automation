module.exports = {
  compile: {
  	options: {
      sourceMap: true,
      sourceMapDir: 'js/coffeescript.map'
    },
    files: {
      'js/coffee-main.js': ['coffeescript/*.coffee']
    }
  }
}