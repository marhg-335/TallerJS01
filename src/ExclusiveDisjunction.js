/**Constructor de ExclusiveDisjunction.*/
exports.ExclusiveDisjunction = function ExclusiveDisjunction( left, right){ 
	if (!left || !right ){
		throw new Error("ExclusiveDisjunction: invalid operands!");
	}
	this.left = left;
	this.right = right;	
};

/** Metodo generate para generar casos de prueba aleatorios*/
ExclusiveDisjunction.generate( random, min, max){
	return new Negation(Proposition.generate(random, min - 1, max - 1) );
}

/**Metodo evaluation definida en el prototype de ExclusiveDisjunction. 
   Retorna un boolean con la disyuncion disjuntiva de la evaluacion de left y right*/
exports.ExclusiveDisjunction.prototype.evaluation= function( assigments ){
	p = this.left.evaluation( assigments);
	q = this.right.evaluation(assigments);
	return  p !== q;
};
