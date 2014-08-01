"use strict";

describe("Generate Test", function(){

	it("Generate", function(){
		var Proposition = taller1.Proposition;
		//var prep = new Proposition();
		var p2 = Proposition.generate( Math.random(), 1, 4);
		var p3 = p2.evaluation();
		expect(typeof p2).toBe('object');			
	});	
});