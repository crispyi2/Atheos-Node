//////////////////////////////////////////////////////////////////////////////80
// Atheos Global Helpers
//////////////////////////////////////////////////////////////////////////////80
// Copyright (c) Atheos & Liam Siira (Atheos.io), distributed as-is and without
// warranty under the MIT License. See [root]/LICENSE.md for more.
// This information must remain intact.
//////////////////////////////////////////////////////////////////////////////80
// Authors: Atheos Team, @hlsiira
//////////////////////////////////////////////////////////////////////////////80

(function() {
	'use strict';

	global.sources = {
		modules: [
			"modules/carbon.js",
			"modules/echo.js",
			"modules/icons.js",
			"modules/global.js",
			"modules/onyx.js",
			"modules/synthetic.js",
			// Global components need to be above this line.
			"modules/system.js",
			"modules/alert.js",
			"modules/flow.js",
			"modules/chrono.js",
			"modules/common.js",
			"modules/i18n.js",
			"modules/keybind.js",
			"modules/modal.js",
			"modules/storage.js",
			"modules/splitview.js",
			"modules/toast.js"
		],
		fonts: [
			"fonts/file-icons/webfont.min.css",
			"fonts/fontawesome/webfont.css",
			"fonts/ubuntu/webfont.css"
		]
	};

}());