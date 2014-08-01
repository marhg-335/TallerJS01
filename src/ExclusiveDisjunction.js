/**Constructor de ExclusiveDisjunction.*/
var ExclusiveDisjunction = exports.ExclusiveDisjunction = declare( Proposition, {

	/**Constructor de ExclusiveDisjunction.*/
	constructor: function ExclusiveDisjunction( left, right) { 
		if (!left || !right ){
			throw new Error("ExclusiveDisjunction: invalid operands!");
		}
		this.left = left;
		this.right = right;	
	},
	/**Retorna un booleano con el resultado de aplicar el operador de disyuncion exclusiva
   	a la evaluacion de left y right*/
	evaluation: function evaluation( assigments ) {
		var p = this.left.evaluation( assigments);
		var q = this.right.evaluation(assigments);
		return  p !== q;
	},

	variables: function variables() {
		return union( this.left.variables(), this.right.variables() );
	},
	/** Metodo generate para generar casos de prueba aleatorios.
	Retorna un objeto ExclusiveDisjunction con operandos left y right como objetos Proposition aleatorios.*/
	'static generate': function generate( Random, min, max ) {
		return new ExclusiveDisjunction(Proposition.generate(Random, min - 1, max - 1), Proposition.generate(Random, min -1, max - 1) );
	}



});

