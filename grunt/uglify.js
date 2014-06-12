module.exports = {
	dev: {
		options: {
			preserveComments : false,
			sourceMap: true,
			sourceMapName: '/sourcemap.map'
		},
		files: {
			'dist/scripts/scripts.min.js': ['app/scripts/**/*.js', '!app/scripts/scripts.min.js']
		}
	}
}