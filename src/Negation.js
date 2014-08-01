
var Negation = exports.Negation = declare(Proposition, {
	/**Constructor de Negation.*/
	constructor: function Negation(operand) {	
		Proposition.call(this);
		if( !operand ){
			throw new Error("Negation: invalid operand!");
		}
		this.operand = operand;	
	},
	/**Retorna un booleano con el resultado de aplicar el operador de negacion a la evaluacion de operand*/
	evaluation: function evaluation( assigments) {
		return !(this.operand.evaluation(assigments));
	},

	'static variables': function variables(){
		return this.operand.variables();
	},
	/** Metodo generate para generar casos de prueba aleatorios
	Retorna un objeto Negation con operand un objeto Proposition aleatorio*/
	'static generate': function generate( Random, min, max ) {
		return new Negation(Proposition.generate(Random, min - 1, max - 1) );
	}

});

