//////////////////////////////////////////////////////////////////////////////80
// Atheos Controller
//////////////////////////////////////////////////////////////////////////////80
// Copyright (c) 2020 Liam Siira (liam@siira.io), distributed as-is and without
// warranty under the MIT License. See [root]/LICENSE.md for more.
// This information must remain intact.
//////////////////////////////////////////////////////////////////////////////80

(function(global) {
	'use strict';

	require('./assets/globals.js');
	require('./assets/sources.js');
	require('./config.js');

	const i18n = require('./components/i18n.js');

	require('./traits/json.js');

	define('i18n', i18n.translate);

	const common = {
		i18n
	};

	module.exports = common;

}(this));