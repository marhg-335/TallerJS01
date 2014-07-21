/** Constructor de Conjunción. Toma como parametros la parte izquiera y la parte derecha */
exports.Conjunction = function Conjunction(left, right){
	this.left = left;
	this.right = right;
};

/** Retorna el resultado de evaluar la parte izquiera y la parte derecha utilizado el operador de conjunción logica */
Conjunction.prototype.evaluation = function evaluation(assignments) {
	var l = this.left.evaluation(assignments);
	var r = this.right.evaluation(assignments);
	return (l && r);
};


/** Metodo genera una proposicion y le aplica el operador de conjuncion. Para esto se toma en cuneta la altura minima y maxima*/
exports.Conjunction.generate = function generate(random1, random2, min, max){
     return new Conjuntion(Proposition.generate(random1, min-1, max-1), Proposition.generate(random2, min-1, max-1));
};