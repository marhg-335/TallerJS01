/** Constructor Conditional. */
function Conditional(left, right) {
    if (!left || !right) {
        throw new Error("Conditional: invalid operands!");
    }
    this.left = left;
    this.right = right;
}
/** Evaluation Conditional */
Conditional.prototype.evaluation = function evaluation(assignments) {
    var resLeft = this.left.evaluation(assignments);
    var resRight = this.right.evaluation(assignments);

    return !resLeft || resRight;
}
/** Generate Conditional */
Conditional.generate = function generate(random, min, max) {
    return new Conditional(Proposition.generate(random, min - 1, max - 1), Proposition.generate(random, min - 1, max - 1));
};


