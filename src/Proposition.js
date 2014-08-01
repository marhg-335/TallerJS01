
var Proposition = exports.Proposition = function Proposition(){ 
	function union( a, b ){
		return a.concat(b.filter(function(i){
	    	return a.indexOf(i) === -1;
			}));
	}

	function randomAssigments(variables){
		assigments = {};
		for (var i = 0; i <= variables.length; i++) {
			assigments[variables[i]] = (Math.random() <= 0.5);
		};
	}
};

Proposition.generate = function generate(random, min, max){
	var rand = Math.random();
	if (min > 0){
		var n = Math.floor((Math.random()*6 + 1));
		switch(n){
			case 1:
				return Conjunction.generate(rand, min, max);
				break;
			case 2:
				return Negation.generate(rand, min, max);
				break;
			case 3:
				return Disjunction.generate(rand, min, max);
				break;
			case 4:
				return ExclusiveDisjunction.generate(rand, min, max);
				break;
			case 5:
				return Conditional.generate(rand, min, max);
				break;
			case 6:
				return Biconditional.generate(rand, min, max);
				break;
			default:
				throw new Error("Invalid option for random.");
		}
	}
	else if(max <= 0){
		var n = Math.floor((Math.random()*3 + 1));
		switch(n){
			case 1:
				return False.generate(rand, min, max);
				break;
			case 2:
				return True.generate(rand, min, max);
				break;
			case 3:
				return Variable.generate(rand, min, max);
				break;
			default:
				throw new Error("Invalid option for random.");
		}
	}
	else{
		var n = Math.floor((Math.random()*9 + 1));
		switch(n){
			case 1:
				return Conjunction.generate(rand, min, max);
				break;
			case 2:
				return Negation.generate(rand, min, max);
				break;
			case 3:
				return Disjunction.generate(rand, min, max);
				break;
			case 4:
				return ExclusiveDisjunction.generate(rand, min, max);
				break;
			case 5:
				return Conditional.generate(rand, min, max);
				break;
			case 6:
				return Biconditional.generate(rand, min, max);
				break;
			case 7:
				return False.generate(rand, min, max);
				break;
			case 8:
				return True.generate(rand, min, max);
				break;
			case 9:
				return Variable.generate(rand, min, max);
				break;
			default:
				throw new Error("Invalid option for random.");
		}
			
	}
};