var Biconditional = exports.Biconditional = declare(Proposition, {
    /** Constructor Biconditional. */
    'constructor': function Biconditional(left, right) {
        if (!left || !right) {
            throw new Error("Biconditional: invalid operands!");
        }
        Proposition.call(this);
        this.left = left;
        this.right = right;
    },
    /** Evaluation Biconditional */
    'evaluation': function evaluation(assignments) {
        return this.left.evaluation(assignments) === this.right.evaluation(assignments);
    },
    /** Generate Biconditional */
    'static generate': function generate(Random, min, max) {
        return new Biconditional(Proposition.generate(Random, min - 1, max - 1),
			Proposition.generate(Random, min - 1, max - 1));
    },

    /** Retoran lista de variables en el sub arbol*/
    'variables': function variables() {
        return union(this.left.variables(), this.right.variables())
    }
});
