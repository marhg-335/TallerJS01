/** Constructor Biconditional. */
var Biconditional = exports.Biconditional = function Biconditional(left, right) {
    if (!left || !right) {
        throw new Error("Biconditional: invalid operands!");
    }
    this.left = left;
    this.right = right;
}
/** Evaluation Biconditional */
Biconditional.prototype.evaluation = function evaluation(assignments) {
    var resLeft = this.left.evaluation(assignments);
    var resRight = this.right.evaluation(assignments);

    return (resLeft === resRight);
}
/** Generate Biconditional */
Biconditional.generate = function generate( random, min, max){
	return new Biconditional(Proposition.generate(random, min - 1, max - 1), Proposition.generate(random, min -1, max - 1) );
};

