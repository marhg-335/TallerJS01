module.exports = function(grunt) {

var sources = ['Biconditional.js','Conditional.js','Conjunction.js','Disjunction.js',
			'ExclusiveDisjunction.js','False.js','True.js','Variable.js', 'Negation.js'];
sources = sources.map( function(path){
	return 'src/' + path;
	});
			
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/taller1.js',
        dest: 'build/taller1.min.js',
      }
    },
	concat: {
      options: {
        separator: '\n\n',
      },
      dist: {
        src: sources,
        dest: 'build/taller1.js',
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);

};