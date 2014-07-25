"use strict";

describe("Constructor test", function(){

	it("Biconditional", function () {
	    expect(function () { new taller1.Biconditional(new taller1.True(), new taller1.True()); }).not.toThrow();
	    expect(function () { new taller1.Biconditional(new taller1.True()); }).toThrow();
	    expect(function () { new taller1.Biconditional(); }).toThrow();
	});

	it("Conditional", function () {
	    expect(function () { new taller1.Conditional(new taller1.True(), new taller1.True()); }).not.toThrow();
	    expect(function () { new taller1.Conditional(new taller1.True()); }).toThrow();
	    expect(function () { new taller1.Conditional(); }).toThrow();
	});

	it("Conjunction: martin arregla el codigo!!!!", function () {
	    expect(function () { new taller1.Conjunction(new taller1.True(), new taller1.True()); }).not.toThrow();
	    expect(function () { new taller1.Conjunction(new taller1.True()); }).toThrow();
	    expect(function () { new taller1.Conjunction(); }).toThrow();
	});

	it("Disjunction", function () {
	    expect(function () { new taller1.Disjunction(new taller1.True(), new taller1.True()); }).not.toThrow();
	    expect(function () { new taller1.Disjunction(new taller1.True()); }).toThrow();
	    expect(function () { new taller1.Disjunction(); }).toThrow();
	});

	it("ExclusiveDisjunction", function () {
	    expect(function () { new taller1.ExclusiveDisjunction(new taller1.True(), new taller1.True()); }).not.toThrow();
	    expect(function () { new taller1.ExclusiveDisjunction(new taller1.True()); }).toThrow();
	    expect(function () { new taller1.ExclusiveDisjunction(); }).toThrow();
	});

	it("Variable: martin arregla el codigo!!!!", function () {
	    expect(function () { new taller1.Variable(); }).toThrow();
	});
	
});