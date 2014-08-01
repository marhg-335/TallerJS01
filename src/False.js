/** Constructor de False. */
var False = exports.False = declare(Proposition,{
	constructor:function False(){
	Proposition.call(this);
	//do nothing
},
/** Metodo que retorna si una evaluacion es False. */
evaluation : function evaluation(){
	return false;
},
/**Metodo generate que retorna false. */
'static generate': function generate(random,min,max){
	return new False();
});