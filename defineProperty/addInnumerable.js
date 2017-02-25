"use strict";

exports = module.exports = function addInnumerable(object, name, value, force){
	if (!force && name in object) { 
		return; 
	} else {
		Object.defineProperty(object, name, {
			configurable: false,
			enumerable: false,
			writable: true,
			value: value
		});
	}
};
