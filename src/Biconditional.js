function Biconditional(left, right) {
    this.left = left;
    this.right = right;
}

Biconditional.generate = function generate( random, min, max){
	return new Biconditional(Proposition.generate(random, min - 1, max - 1), Proposition.generate(random, min -1, max - 1) );
};

Biconditional.prototype.evaluation = function evaluation(assignments) {
    var resLeft = this.left.evaluation(assignments);
    var resRight = this.right.evaluation(assignments);

    return (resLeft === resRight);
}
