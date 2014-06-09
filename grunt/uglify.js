module.exports = {
	dev: {
		options: {
			sourceMap: true,
			sourceMapName: 'js/sourcemap.map'
		},
		files: {
			'js/scripts.min.js': ['js/**/*.js', '!js/scripts.min.js']
		}
	}
}