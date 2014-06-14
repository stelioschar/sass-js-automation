module.exports = {
	build: {
		expand: true,
		cwd: 'app/styles/',
		src: ['*.css', '!*.min.css'],
		dest: 'dist/styles/',
		ext: '.min.css'
	}
}