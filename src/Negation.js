
function Negation(x){	
	this.x = x;	
}
Negation.prototype.evaluation = function( assigments){
	return !(this.x.evaluation(assigments));
};
