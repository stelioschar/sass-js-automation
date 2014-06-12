module.exports = {
  compile: {
  	options: {
      sourceMap: true,
      sourceMapDir: 'app/scripts/coffeescript.map'
    },
    files: {
      'app/scripts/coffee-main.js': ['app/coffeescript/*.coffee']
    }
  }
}