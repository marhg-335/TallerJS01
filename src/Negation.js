
function Negation(operand){	
	this.operand = operand;	
}
Negation.prototype.evaluation = function( assigments){
	return !(this.operand.evaluation(assigments));
};
