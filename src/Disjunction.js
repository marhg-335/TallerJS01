function Disjunction(left,right){
	this.left=left;
	this.right=right;
}

Disjunction.prototype.evaluation=function evaluation(assigments){
	var l=this.left.evaluation(assigments);
	var r=this.right.evaluation(assigments);
	return(l||r);
	
}
