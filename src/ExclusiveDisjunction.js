	
function ExclusiveDisjunction( left, right){ 
	if (!left || !right ){
		throw new Error("Error in ExclusiveDisjunction: left or right are undefined or null.");
	}
	this.left = left;
	this.right = right;	
}
ExclusiveDisjunction.prototype.evaluation= function( assigments ){
	p = this.left.evaluation( assigments);
	q = this.right.evaluation(assigments);
	return  p !== q;
};
