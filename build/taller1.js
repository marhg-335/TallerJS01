"use strict";
var taller1 = (function(){
	var exports = {};

function declare(superconstructor, members) {
	var constructor, placeholder;
	if (typeof superconstructor !== 'function') {
		throw new Error("Cannot inherit from type "+ typeof superconstructor +"!");
	}
	constructor = members.hasOwnProperty('constructor') ? members.constructor 
		: function () {
			superconstructor.apply(this, arguments);
		};
	placeholder = function () {};
	placeholder.prototype = superconstructor.prototype;
	constructor.prototype = new placeholder();
	constructor.prototype.constructor = constructor;
	
	Object.keys(members).map(function (id) {
		var match = id.match(/^static\s+/);
		if (match) {
			constructor[id.substr(match[0].length)] = members[id];
		} else if (id !== 'constructor') {
			constructor.prototype[id] = members[id];
		}
	});
	alert(JSON.stringify([Object.keys(constructor), Object.keys(constructor.prototype)]));
	return constructor;
}



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

var Biconditional = exports.Biconditional = declare(Proposition, {
    /** Constructor Biconditional. */
    'constructor': function Biconditional(left, right) {
        if (!left || !right) {
            throw new Error("Biconditional: invalid operands!");
        }
        Proposition.call(this);
        this.left = left;
        this.right = right;
    },
    /** Evaluation Biconditional */
    'evaluation': function evaluation(assignments) {
        return this.left.evaluation(assignments) === this.right.evaluation(assignments);
    },
    /** Generate Biconditional */
    'static generate': function generate(Random, min, max) {
        return new Biconditional(Proposition.generate(Random, min - 1, max - 1),
			Proposition.generate(Random, min - 1, max - 1));
    }
});


/** Constructor Conditional */
var Conditional = exports.Conditional = function Conditional(left, right) {
    if (!left || !right) {
        throw new Error("Conditional: invalid operands!");
    }
    this.left = left;
    this.right = right;
}
var Conditional = exports.Conditional = declare(Proposition, {
    /** Constructor Conditional. */
    constructor: function Conditional(left, right) {
        if (!left || !right) {
            throw new Error("Conditional: invalid operands!");
        }
        Proposition.call(this);
        this.left = left;
        this.right = right;
    },
    /** Evaluation Conditional */
    evaluation: function evaluation(assignments) {
        return !left.evaluation(assignments) || right.evaluation(assignments);
    },
    /** Generate Conditional */
    'static generate': function generate(Random, min, max) {
        return new Conditional(Proposition.generate(Random, min - 1, max - 1),
			Proposition.generate(Random, min - 1, max - 1));
    }
});

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
	'static generate' : function generate(random1, min, max){
	     return new Conjunction(Proposition.generate(random1, min-1, max-1), Proposition.generate(random2, min-1, max-1));
	}
});

/**Constructor de Disjunction. Toma como parametros la parte izquierda y derecha de la disjuncion */
var Disjunction = exports.Disjunction = declare (Proposition, {
	constructor : function Disjunction(left,right){
	Proposition.call(this);
	if (!left || !right){
		throw new Error("Disjunction: invalid operands!");
<<<<<<< HEAD
	}
=======
<<<<<<< HEAD
},
=======
>>>>>>> a2b54b1830ff33d1c11ea80d735a32c062ed0c05
>>>>>>> 8e89e27a019c83cf74ae85633cc84019c80bf71e
	this.left=left;
	this.right=right;
},
/** Metodo que devuele la evalucion de la parte izquiera y derecha mediante la disjuncion.*/
evaluation : function evaluation(assigments){
	var l=this.left.evaluation(assigments);
	var r=this.right.evaluation(assigments);
	return(l||r);
},
/** Retorna una Disjuncion cuyos operandos son objetos proposition.*/
'static generate': function generate( random, min, max){
	return new Disjunction(Proposition.generate(random, min - 1, max - 1), Proposition.generate(random, min -1, max - 1) );
<<<<<<< HEAD
});
=======
}});
>>>>>>> a2b54b1830ff33d1c11ea80d735a32c062ed0c05



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
	/** Metodo generate para generar casos de prueba aleatorios.
	Retorna un objeto ExclusiveDisjunction con operandos left y right como objetos Proposition aleatorios.*/
	'static generate': function generate( Random, min, max ) {
		return new ExclusiveDisjunction(Proposition.generate(Random, min - 1, max - 1), Proposition.generate(Random, min -1, max - 1) );
	}



});



/** Constructor de False. */
var False = exports.False = declare(Proposition,{
	constructor:function False(){
	Proposition.call(this);
	//do nothing
},
/** Metodo que retorna si una evaluacion es False. */
evaluation : function evaluation(){
	return false;
},
/**Metodo generate que retorna false. */
'static generate': function generate(random,min,max){
	return new False();
<<<<<<< HEAD
=======
}
>>>>>>> a2b54b1830ff33d1c11ea80d735a32c062ed0c05
});

/**Constructor de True. */
 var True = exports.True = declare(Proposition, {
	constructor : function True(){
	Proposition.call(this);
		//do nothing
 },
/** Metodo que retorna si una evaluacion es True.*/
evaluation : function evaluation(){
	return true;

},
/**Metodo generate que retorna true */
'static generate' : function generate(random,min,max){
	return new True();
}
});







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
	}
});


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
	/** Metodo generate para generar casos de prueba aleatorios
	Retorna un objeto Negation con operand un objeto Proposition aleatorio*/
	'static generate': function generate( Random, min, max ) {
		return new Negation(Proposition.generate(Random, min - 1, max - 1) );
	}

});



	return exports;
	})();

//# sourceMappingURL=taller1.js.map
