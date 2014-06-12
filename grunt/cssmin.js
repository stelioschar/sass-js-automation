module.exports = {
	minify: {
		expand: true,
		cwd: 'app/styles/',
		src: ['*.css', '!*.min.css'],
		dest: 'dist/styles/',
		ext: '.min.css'
	}
}