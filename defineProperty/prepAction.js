"use strict";

var addInnumerable = require('./addInnumerable');

exports = module.exports = function prepAction(object, action){
	var camelAction = action.charAt(0).toUpperCase() + action.slice(1);
	var __action =  '__' + camelAction;
	var beforeAction =  'before' + camelAction;
	var afterAction =  'after' + camelAction;
	Object.defineProperty(object, action, {
		configurable: false,
		enumerable: false,
		get: function(){
			return this[__action];
		},
		set : function(action){
			addInnumerable(object, __action, function(){
				var self = this;
				if(self[beforeAction] && typeof self[beforeAction] === 'function') {
					self[beforeAction].apply(self, arguments);
				}
				action.apply(self, arguments);
				if(self[afterAction] && typeof self[afterAction] === 'function') {
					self[afterAction].apply(self, arguments);
				}
			});
		}
	});
};
