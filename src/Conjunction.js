var Conjunction = exports.Conjunction = declare(Proposition, {		
	/** Constructor de Conjunción. Toma como parametros la parte izquiera y la parte derecha */
	'constructor' : function Conjunction(left, right){
		if (!left || !right) {
        	throw new Error("Conditional: invalid operands!");
    	}
		this.left = left;
		this.right = right;
	},

	/** Retorna el resultado de evaluar la parte izquiera y la parte derecha utilizado el operador de conjunción logica */
	'evaluation' : function evaluation(assignments) {
		var l = this.left.evaluation(assignments);
		var r = this.right.evaluation(assignments);
		return (l && r);
	},

	/** Metodo genera una proposicion y le aplica el operador de conjuncion. Para esto se toma en cuneta la altura minima y maxima*/
<<<<<<< HEAD
	'static generate' : function generate(random1, min, max){
	     return new Conjunction(Proposition.generate(random1, min-1, max-1), Proposition.generate(random2, min-1, max-1));
=======
	'static generate' : function generate(random, min, max){
	     return new Conjunction(Proposition.generate(random, min-1, max-1), Proposition.generate(random, min-1, max-1));
	},

	/** Retoran lista de variables en el sub arbol*/
	'variables' : function variables(){
		return union(this.left.variables(), this.right.variables())
>>>>>>> Agrego variables en conjuntion y variable
	}
});