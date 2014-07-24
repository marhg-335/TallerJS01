/**Constructor de ExclusiveDisjunction.*/
var ExclusiveDisjunction = exports.ExclusiveDisjunction = function ExclusiveDisjunction( left, right){ 
	if (!left || !right ){
		throw new Error("ExclusiveDisjunction: invalid operands!");
	}
	this.left = left;
	this.right = right;	
};

/**Retorna un booleano con el resultado de aplicar el operador de disyuncion exclusiva
   a la evaluacion de left y right*/
ExclusiveDisjunction.prototype.evaluation= function( assigments ){
	var p = this.left.evaluation( assigments);
	var q = this.right.evaluation(assigments);
	return  p !== q;
};

/** Metodo generate para generar casos de prueba aleatorios.
	Retorna un objeto ExclusiveDisjunction con operandos left y right como objetos Proposition aleatorios.*/
ExclusiveDisjunction.generate = function generate( random, min, max){
	return new ExclusiveDisjunction(Proposition.generate(random, min - 1, max - 1), Proposition.generate(random, min -1, max - 1) );
};
