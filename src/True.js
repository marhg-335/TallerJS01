/**Constructor de True. */
 var True = exports.True = declare(Proposition, {
	constructor : function True(){
	Proposition.call(this);
		//do nothing
 }
/** Metodo que retorna si una evaluacion es True.*/
 True.prototype.evaluation= function evaluation(){
	return true;

	}
/**Metodo generate que retorna true */
'static generate' : function generate(random,min,max){
	return new True();
};


