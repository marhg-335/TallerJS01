function Variable(id){
	this.id = id;
};

Variable.prototype.evaluation = function evaluation(assignments) {
	return !!assignments[this.id];
};