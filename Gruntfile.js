module.exports = function( grunt ) {
 
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      // SASS
      sass : {
         dev : {
            options : { 
               style : 'compressed',
               noCache: true
            },
            files : {
               'assets/css/main.css' : 'assets/css/sass/main.scss'               
            }
         },
         index : {
            options : { 
               style : 'compressed',
               noCache: true
            },
            files : {
               'assets/css/index.css' : 'assets/css/index.scss'
            }
         },
      },

      // Watch
      watch: {
         sass: {
            files: [	'assets/css/sass/*.scss', 
            			'assets/css/sass/atomos/*.scss',
            			'assets/css/sass/moleculas/*.scss',
            			'assets/css/sass/organismos/*.scss'
            		 ],
            tasks: ['sass:dev']
         },
         'sass:index': {
         	files: ['assets/css/*.scss'],
         	tasks: ['sass:index']
         }
      }

   });

   // Plugins do Grunts
   grunt.loadNpmTasks('grunt-contrib-concat')
   grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
   grunt.loadNpmTasks( 'grunt-comment-media-queries' );
   grunt.loadNpmTasks( 'grunt-contrib-sass' );
   grunt.loadNpmTasks( 'grunt-contrib-uglify' );
   grunt.loadNpmTasks( 'grunt-contrib-watch' );
 
 
   // Tarefas que serão executadas
   grunt.registerTask( 'default', [ 'concat', 'cssmin', 'sass', 'uglify' ] );

   grunt.registerTask( 'w', [ 'watch' ] );

};