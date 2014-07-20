/** Constructor de Conjunción. Toma como parametros la parte izquiera y la parte derecha */
export.Conjunction = function Conjunction(left, right){
	this.left = left;
	this.right = right;
};

/** Retorna el resultado de evaluar la parte izquiera y la parte derecha utilizado el operador de conjunción logica */
export.Conjunction.prototype.evaluation = function evaluation(assignments) {
	var l = this.left.evaluation(assignments);
	var r = this.right.evaluation(assignments);
	return (l && r);
};