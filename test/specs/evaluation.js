"use strict";

describe("Evaluation Test", function(){

	it("Conjuntion", function(){
		var Conjunction = taller1.Conjunction;
		var t = new taller1.True();
		var f = new taller1.False();
		expect(typeof Conjunction).toBe("function");
		expect( (new Conjunction(t , t)).evaluation({})).toBe(true);
		expect( (new Conjunction(f , t)).evaluation({})).toBe(false);
		expect( (new Conjunction(t , f)).evaluation({})).toBe(false);
		expect( (new Conjunction(f , f)).evaluation({})).toBe(false);
	});

	it("Biconditional", function(){
		expect((new taller1.Biconditional(new taller1.True(),new taller1.True())).evaluation({})).toBe(true);
		expect((new taller1.Biconditional(new taller1.True(),new taller1.False())).evaluation({})).toBe(false);
		expect((new taller1.Biconditional(new taller1.False(),new taller1.True())).evaluation({})).toBe(false);
		expect((new taller1.Biconditional(new taller1.False(),new taller1.False())).evaluation({})).toBe(true);
	});

	it("Biconditional", function(){
		expect((new taller1.Conditional(new taller1.True(),new taller1.True())).evaluation({})).toBe(true);
		expect((new taller1.Conditional(new taller1.True(),new taller1.False())).evaluation({})).toBe(false);
		expect((new taller1.Conditional(new taller1.False(),new taller1.True())).evaluation({})).toBe(true);
		expect((new taller1.Conditional(new taller1.False(),new taller1.False())).evaluation({})).toBe(true);
	});


	
	it("Disjunction", function(){
		var dis = new taller1.Disjunction(new taller1.Variable("p"),new taller1.Variable("q"));
		expect(dis.evaluation({p:false,q:false})).toBe(false);
		expect(dis.evaluation({p:true,q:false})).toBe(true);
		expect(dis.evaluation({p:false,q:true})).toBe(true);
		expect(dis.evaluation({p:true,q:true})).toBe(true);
	});



	it("testcase Tabla Verdad Negation", function() {
		var negation = new taller1.Negation(new taller1.Variable("p"));
		var evalNotTrue = negation.evaluation({"p":true});
		var evalNotFalse = negation.evaluation({"p":false});

		expect(evalNotTrue).toBe(false);
		expect(evalNotFalse).toBe(true);
	});

	it("testcase Tabla Verdad ExclusiveDisjunction", function() {
		var exclusiveDisj = new taller1.ExclusiveDisjunction(new taller1.Variable("p"), new taller1.Variable("q"));
		var evalTrueExDisjTrue = exclusiveDisj.evaluation({"p":true, "q":true});
		var evalTrueExDisjFalse = exclusiveDisj.evaluation({"p":true, "q":false});
		var evalFalseExDisjTrue = exclusiveDisj.evaluation({"p":false, "q":true});
		var evalFalseExDisjFalse = exclusiveDisj.evaluation({"p":false, "q":false});

		expect(evalTrueExDisjTrue).toBe(false);
		expect(evalTrueExDisjFalse).toBe(true);
		expect(evalFalseExDisjTrue).toBe(true); 
		expect(evalFalseExDisjFalse).toBe(false);
	});

	
});