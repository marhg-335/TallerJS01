
var Negation = exports.Negation = function Negation(operand){	
	if( !operand ){
		throw new Error("Negation: invalid operand!");
	}
	this.operand = operand;	
};

Negation.prototype.evaluation = function( assigments){
	return !(this.operand.evaluation(assigments));
};
