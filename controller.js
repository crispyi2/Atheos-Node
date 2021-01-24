//////////////////////////////////////////////////////////////////////////////80
// Atheos Controller
//////////////////////////////////////////////////////////////////////////////80
// Copyright (c) 2020 Liam Siira (liam@siira.io), distributed as-is and without
// warranty under the MIT License. See [root]/LICENSE.md for more.
// This information must remain intact.
//////////////////////////////////////////////////////////////////////////////80

(function() {
	'use strict';

	const controller = function(req, res) {
		let POST = Post(req);
		let SEND = Send(res);
		
		let target = POST('target');

		if (target in common) {
			common[target].handle(POST, SEND);
		} else {
			SEND('error',target);
		}
	};

	module.exports = controller;

}());