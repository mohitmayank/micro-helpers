"use strict";

exports = module.exports = function addInnumerable(object, name, options){
	options = options || {};
	if (!options.force && name in object) { 
		return; 
	} else {
		var descriptor = {
			configurable: false,
			enumerable: false,
			writable: true
		};
		if(options.value) {
			descriptor.value = options.value;
		}
		if(options.get) {
			descriptor.get = options.get; 
		}
		if(options.set) {
			descriptor.set = options.set; 
		}
		Object.defineProperty(object, name, descriptor);
	}
};
