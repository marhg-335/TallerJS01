function Conjunction(left, right){
	this.left = left;
	this.right = rigth;
};

Conjunction.prototype.evaluation = function evaluation(assignments) {
	var l = this.left.evaluation(assignments);
	var r = this.right.evaluation(assignments);
	return (l && r);
};