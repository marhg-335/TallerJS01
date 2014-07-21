function Conditional(left,right){
    this.left = left;
    this.right = right;
}

Conditional.generate = function generate( random, min, max){
	return new Conditional(Proposition.generate(random, min - 1, max - 1), Proposition.generate(random, min -1, max - 1) );
};
Conditional.prototype.evaluation = function evaluation(assignments) {
    var resLeft = this.left.evaluation(assignments);
    var resRight = this.right.evaluation(assignments);

    return resLeft && !resRight;
}


