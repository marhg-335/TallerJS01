/** Constructor Conditional */
var Conditional = exports.Conditional = function Conditional(left, right) {
    if (!left || !right) {
        throw new Error("Conditional: invalid operands!");
    }
    this.left = left;
    this.right = right;
}
var Conditional = exports.Conditional = declare(Proposition, {
    /** Constructor Conditional. */
    constructor: function Conditional(left, right) {
        if (!left || !right) {
            throw new Error("Conditional: invalid operands!");
        }
        Proposition.call(this);
        this.left = left;
        this.right = right;
    },
    /** Evaluation Conditional */
    evaluation: function evaluation(assignments) {
        return !this.left.evaluation(assignments) || this.right.evaluation(assignments);
    },
    /** Generate Conditional */
    'static generate': function generate(Random, min, max) {
        return new Conditional(Proposition.generate(Random, min - 1, max - 1),
			Proposition.generate(Random, min - 1, max - 1));
    },

    /** Retoran lista de variables en el sub arbol*/
	'variables' : function variables(){
    return union(this.left.variables(), this.right.variables())
    }
});