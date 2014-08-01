var Variable = exports.Variable = declare (Proposition, {
	/** Constructor de Variable. Toma como parametro el identificador de la variable*/
	'constructor' : function Variable(id){
		if (!id) {
        	throw new Error("Variable: invalid operand!");
    	}
		this.id = id;
	},

	/** Metodo que toma por parametro un objeto con las asignaciones de las variables y retorna el valor booleano de la propia variable */
	'evaluation' : function evaluation(assignments) {
		if (!assignments  || ! assignments.hasOwnProperty(this.id))
		{
			throw new Error("Variable no existe");
		};
		return !! assignments[this.id];
	},

	/** Generador Aleatorio*/
	'static generate' : function generate( random, min, max){
	var idVariable = String.fromCharCode(97 + Math.random()*26 )
	return new  Variable(idVariable);
	},

	/** Retorna lista con id de variable*/
	'variables' : function variables(){
		return [this.id]
	}
});