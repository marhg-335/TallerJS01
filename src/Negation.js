/**Constructor de Negation.*/
exports.Negation = function Negation(operand){	
	if( !operand ){
		throw new Error("Negation: invalid operand!");
	}
	this.operand = operand;	
};

/** Metodo generate para generar casos de prueba aleatorios*/
Negation.generate( random, min, max ){
	return new Negation(Proposition.generate(random, min - 1, max - 1) );
}

/**Metodo evaluation definida en el prototype de Negation. 
   Retorna la negacion de la evaluacion de operand*/
exports.Negation.prototype.evaluation = function( assigments){
	return !(this.operand.evaluation(assigments));
};
