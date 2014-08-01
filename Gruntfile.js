module.exports = function(grunt) {

var sources = ['__prologe__.js', 'oop.js','Proposition.js','Biconditional.js','Conditional.js','Conjunction.js','Disjunction.js',
			'ExclusiveDisjunction.js','False.js','True.js','Variable.js', 'Negation.js','__epilogue__.js', ];
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

    concat_sourcemap: {
      build: {
        files: {
          'build/taller1.js': sources
        },
        options : {
          separator: '\n\n'
        }
      }
    },

	karma: {
		options: {
			configFile: 'test/karma.conf.js',
		},
		basictest:{
			browsers: ['PhantomJS']
		},
		testWindows:{
			browsers:['Chrome','Firefox','IE']
		},
		testMac: {
			browsers: ['Safari','Chrome','Firefox']
		},
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-sourcemap');
  grunt.loadNpmTasks('grunt-karma');

  // Default task(s).
  grunt.registerTask('default', ['concat_sourcemap', 'uglify', 'karma:basictest']);

};