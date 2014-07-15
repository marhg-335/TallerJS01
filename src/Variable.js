function Variable(id){
	this.id = id;
};

Variable.prototype.evaluation = function evaluation(assignments) {
	if (!assignments  || ! assignments.hasOwnProperty(this.id))
	{
		throw new Error("Variable no existe");
	};
	return !! assignments[this.id];
};
