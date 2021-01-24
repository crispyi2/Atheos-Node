//////////////////////////////////////////////////////////////////////////////80
// Atheos Configuration
//////////////////////////////////////////////////////////////////////////////80
// Copyright (c) Atheos & Liam Siira (Atheos.io), distributed as-is and without
// warranty under the MIT License. See [root]/docs/LICENSE.md for more.
// This information must remain intact.
//////////////////////////////////////////////////////////////////////////////80
// Authors: Atheos Team, @hlsiira
//////////////////////////////////////////////////////////////////////////////80

(function() {
	'use strict';

	// PATH TO ATHEOS
	define("BASE_PATH", process.cwd());

	// BASE URL TO ATHEOS (without trailing slash)
	//define("BASE_URL", "dev.atheos.io");

	// THEME : default, modern or clear (look at /themes)
	define("THEME", "atheos");

	// SESSION LIFETIME (e.g. 7200 = 2 hours)
	define("LIFETIME", false);

	// TIMEZONE
	process.env.TZ = "America/New_York";

	// DEVELOPMENT MODE
	define("DEVELOPMENT", true);

	// EXTERNAL AUTHENTICATION
	// define("AUTH_PATH", "/path/to/customauth.php");

	//////////////////////////////////////////////////////////////////////////////80
	// ** DO NOT EDIT CONFIG BELOW **
	//////////////////////////////////////////////////////////////////////////////80

	// PATHS
	define("COMPONENTS", `${BASE_PATH}/components`);
	define("PLUGINS", `${BASE_PATH}/plugins`);
	define("THEMES", `${BASE_PATH}/themes`);
	define("DATA", `${BASE_PATH}/data`);
	define("WORKSPACE", `${BASE_PATH}/workspace`);

	// END POINT URLS
	define("DATAPOINT", "https://www.atheos.io/analytics");
	define("MARKETURL", "https://www.atheos.io/market/json");
	define("GITHUBAPI", "https://api.github.com/repos/Atheos/Atheos/releases/latest");

}(this));