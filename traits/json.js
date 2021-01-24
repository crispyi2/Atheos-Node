//////////////////////////////////////////////////////////////////////////////80
// Atheos Controller
//////////////////////////////////////////////////////////////////////////////80
// Copyright (c) 2020 Liam Siira (liam@siira.io), distributed as-is and without
// warranty under the MIT License. See [root]/LICENSE.md for more.
// This information must remain intact.
//////////////////////////////////////////////////////////////////////////////80

(function() {
	'use strict';
	
	global.Post = function(req) {
		return function(k) {
			if(k in req.body) return req.body[k];
		};
	};
	
	global.Send = function(res) {
		return function(status, data) {
			if(!isObject(data)) {
				data = {
					'text':data
				};
			}
			if(STACK.length >0) {
				data.debug = stack;
				stack = [];
			}
			
			data.status = status;
			res.json(data);
		};
	};

}());