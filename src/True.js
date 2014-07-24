/**Constructor de True. */
 var True = exports.True = function True(){
		//do nothing
 }
/** Metodo que retorna si una evaluacion es True.*/
 True.prototype.evaluation= function evaluation(){
	return true;

	}
/**Metodo generate que retorna true */
True.generate =  function generate(random,min,max){
	return new True();
};