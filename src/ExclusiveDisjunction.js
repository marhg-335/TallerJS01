	
function ExclusiveDisjunction( left, right){	
	this.left = left;
	this.right = right;	
}
ExclusiveDisjunction.prototype.evaluation= function( assigments ){
	p = this.left.evaluation( assigments);
	q = this.right.evaluation(assigments);
	return  p !== q;
};
