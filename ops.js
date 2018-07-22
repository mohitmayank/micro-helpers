"use strict";

exports = module.exports = {
	yea : function(){return true;},
	nay : function(){return false;},
	noop : function(){},
	err : function (err) {
		if (err) { throw err; }
	}
};
