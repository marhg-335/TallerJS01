/** Constructor de False. */
var False = exports.False = function False(){
	//do nothing
};
/** Metodo que retorna si una evaluacion es False. */
 False.prototype.evaluation= function evaluation(){
	return false;
};

False.generate =  function generate(random,min,max){
	return new False();
};