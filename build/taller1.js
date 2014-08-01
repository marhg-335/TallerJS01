"use strict";
var taller1 = (function(){
	var exports = {};

/** Constructor Biconditional. */
var Biconditional = exports.Biconditional = function Biconditional(left, right) {
    if (!left || !right) {
        throw new Error("Biconditional: invalid operands!");
    }
    this.left = left;
    this.right = right;
}
/** Evaluation Biconditional */
Biconditional.prototype.evaluation = function evaluation(assignments) {
    var resLeft = this.left.evaluation(assignments);
    var resRight = this.right.evaluation(assignments);

    return (resLeft === resRight);
}
/** Generate Biconditional */
Biconditional.generate = function generate( random, min, max){
	return new Biconditional(Proposition.generate(random, min - 1, max - 1), Proposition.generate(random, min -1, max - 1) );
};



/** Constructor Conditional */
var Conditional = exports.Conditional = function Conditional(left, right) {
    if (!left || !right) {
        throw new Error("Conditional: invalid operands!");
    }
    this.left = left;
    this.right = right;
}
/** Evaluation Conditional */
Conditional.prototype.evaluation = function evaluation(assignments) {
    var resLeft = this.left.evaluation(assignments);
    var resRight = this.right.evaluation(assignments);

    return !resLeft || resRight;
}
/** Generate Conditional */
Conditional.generate = function generate(random, min, max) {
    return new Conditional(Proposition.generate(random, min - 1, max - 1), Proposition.generate(random, min - 1, max - 1));
};

/** Constructor de Conjunción. Toma como parametros la parte izquiera y la parte derecha */
var Conjunction = exports.Conjunction = function Conjunction(left, right){
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
Conjunction.generate = function generate(random1, random2, min, max){
     return new Conjunction(Proposition.generate(random1, min-1, max-1), Proposition.generate(random2, min-1, max-1));
};

/**Constructor de Disjunction. Toma como parametros la parte izquierda y derecha de la disjuncion */
var Disjunction = exports.Disjunction = function Disjunction(left,right){
	if (!left || !right){
		throw new Error("Disjunction: invalid operands!");
}
	this.left=left;
	this.right=right;
}
/** Metodo que devuele la evalucion de la parte izquiera y derecha mediante la disjuncion.*/
Disjunction.prototype.evaluation=function evaluation(assigments){
	var l=this.left.evaluation(assigments);
	var r=this.right.evaluation(assigments);
	return(l||r);
}
/** Retorna una Disjuncion cuyos operandos son objetos proposition.*/
Disjunction.generate = function generate( random, min, max){
	return new Disjunction(Proposition.generate(random, min - 1, max - 1), Proposition.generate(random, min -1, max - 1) );
};

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


/** Constructor de False. */
var False = exports.False = function False(){
	//do nothing
};
/** Metodo que retorna si una evaluacion es False. */
 False.prototype.evaluation= function evaluation(){
	return false;
};
/**Metodo generate que retorna false. */
False.generate =  function generate(random,min,max){
	return new False();
};

/**Constructor de True. */
 var True = exports.True = function True(){
		//do nothing
 }
/** Metodo que retorna si una evaluacion es True.*/
 True.prototype.evaluation= function evaluation(){
	return true;

	}
/**Metodo generate que retorna true */
True.generate =  function generate(random,min,max){
	return new True();
};

/** Constructor de Variable. Toma como parametro el identificador de la variable*/
var Variable = exports.Variable = function Variable(id){
	this.id = id;
};

/** Metodo que toma por parametro un objeto con las asignaciones de las variables y retorna el valor booleano de la propia variable */
Variable.prototype.evaluation = function evaluation(assignments) {
	if (!assignments  || ! assignments.hasOwnProperty(this.id))
	{
		throw new Error("Variable no existe");
	};
	return !! assignments[this.id];
};

Variable.generate = function generate( random, min, max){
	var idVariable = String.fromCharCode(97 + Math.random()*26 )
	return new  Variable(idVariable);
};


/**Constructor de Negation.*/
var Negation = exports.Negation = function Negation(operand){	
	if( !operand ){
		throw new Error("Negation: invalid operand!");
	}
	this.operand = operand;	
};

/**Retorna un booleano con el resultado de aplicar el operador de negacion a la evaluacion de operand*/
Negation.prototype.evaluation = function( assigments){
	return !(this.operand.evaluation(assigments));
};

/** Metodo generate para generar casos de prueba aleatorios
	Retorna un objeto Negation con operand un objeto Proposition aleatorio*/
Negation.generate = function generate( random, min, max ){
	return new Negation(Proposition.generate(random, min - 1, max - 1) );
};





var Proposition = exports.Proposition = function Proposition(){ 
	
};

Proposition.generate = function generate(random, min, max){
	var rand = Math.random();
	if (min > 0){
		var n = Math.floor((Math.random()*6 + 1));
		switch(n){
			case 1:
				return Conjunction.generate(rand, min, max);
				break;
			case 2:
				return Negation.generate(rand, min, max);
				break;
			case 3:
				return Disjunction.generate(rand, min, max);
				break;
			case 4:
				return ExclusiveDisjunction.generate(rand, min, max);
				break;
			case 5:
				return Conditional.generate(rand, min, max);
				break;
			case 6:
				return Biconditional.generate(rand, min, max);
				break;
			default:
				throw new Error("Invalid option for random.");
		}
	}
	else if(max <= 0){
		var n = Math.floor((Math.random()*3 + 1));
		switch(n){
			case 1:
				return False.generate(rand, min, max);
				break;
			case 2:
				return True.generate(rand, min, max);
				break;
			case 3:
				return Variable.generate(rand, min, max);
				break;
			default:
				throw new Error("Invalid option for random.");
		}
	}
	else{
		var n = Math.floor((Math.random()*9 + 1));
		switch(n){
			case 1:
				return Conjunction.generate(rand, min, max);
				break;
			case 2:
				return Negation.generate(rand, min, max);
				break;
			case 3:
				return Disjunction.generate(rand, min, max);
				break;
			case 4:
				return ExclusiveDisjunction.generate(rand, min, max);
				break;
			case 5:
				return Conditional.generate(rand, min, max);
				break;
			case 6:
				return Biconditional.generate(rand, min, max);
				break;
			case 7:
				return False.generate(rand, min, max);
				break;
			case 8:
				return True.generate(rand, min, max);
				break;
			case 9:
				return Variable.generate(rand, min, max);
				break;
			default:
				throw new Error("Invalid option for random.");
		}
			
	}
};

	return exports;
	})();