function declare(superconstructor, members) {
	var constructor, placeholder;
	if (typeof superconstructor !== 'function') {
		throw new Error("Cannot inherit from type "+ typeof superconstructor +"!");
	}
	constructor = members.hasOwnProperty('constructor') ? members.constructor 
		: function () {
			superconstructor.apply(this, arguments);
		};
	placeholder = function () {};
	placeholder.prototype = superconstructor.prototype;
	constructor.prototype = new placeholder();
	constructor.prototype.constructor = constructor;
	
	Object.keys(members).map(function (id) {
		var match = id.match(/^static\s+/);
		if (match) {
			constructor[id.substr(match[0].length)] = members[id];
		} else if (id !== 'constructor') {
			constructor.prototype[id] = members[id];
		}
	});
	return constructor;
}
