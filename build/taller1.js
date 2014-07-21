var taller1 = (function(){
	var exports = {};

function Biconditional(left, right) {
    this.left = left;
    this.right = right;
}

Biconditional.prototype.evaluation = function evaluation(assignments) {
    var resLeft = this.left.evaluation(assignments);
    var resRight = this.right.evaluation(assignments);

    return (resLeft === resRight);
}


function Conditional(left,right){
    this.left = left;
    this.right = right;
}

Conditional.prototype.evaluation = function evaluation(assignments) {
    var resLeft = this.left.evaluation(assignments);
    var resRight = this.right.evaluation(assignments);

    return resLeft && !resRight;
}




function Conjunction(left, right){
	this.left = left;
	this.right = right;
};

Conjunction.prototype.evaluation = function evaluation(assignments) {
	var l = this.left.evaluation(assignments);
	var r = this.right.evaluation(assignments);
	return (l && r);
};


var Disjunction = exports.Disjunction = function Disjunction(left,right){
	if (!!left || !!right){
		throw new Error("Disjunction: invalid operands!");
}
	this.left=left;
	this.right=right;
}

Disjunction.prototype.evaluation=function evaluation(assigments){
	var l=this.left.evaluation(assigments);
	var r=this.right.evaluation(assigments);
	return(l||r);
	
}


	
function ExclusiveDisjunction( left, right){ 
	if (!left || !right ){
		throw new Error("ExclusiveDisjunction: invalid operands!");
	}
	this.left = left;
	this.right = right;	
}
ExclusiveDisjunction.prototype.evaluation= function( assigments ){
	p = this.left.evaluation( assigments);
	q = this.right.evaluation(assigments);
	return  p !== q;
};


var False = exports.False = function False(){
	//do nothing
};

 False.prototype.evaluation= function evaluation(){
	return false;
};


 var True = exports.True = function True(){
		//do nothingggg
 }

 True.prototype.evaluation= function evaluation(){
	return true;

	}



export.Variable = function Variable(id){
	this.id = id;
};

export.Variable.prototype.evaluation = function evaluation(assignments) {
	if (!assignments  || ! assignments.hasOwnProperty(this.id))
	{
		throw new Error("Variable no existe");
	};
	return !! assignments[this.id];
};



function Negation(operand){	
	if( !operand ){
		throw new Error("Negation: invalid operand!");
	}
	this.operand = operand;	
}
Negation.prototype.evaluation = function( assigments){
	return !(this.operand.evaluation(assigments));
};


	return exports;
	})();