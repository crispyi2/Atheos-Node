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

	global.define = function(key, value) {
		if (key in global) throw new Error(`${key} is already defined`);
		global[key] = value;
	};

	//////////////////////////////////////////////////////////////////////////80
	// Methods for determining whether something is or isn't
	//////////////////////////////////////////////////////////////////////////80
	global.isArray = (value) => value && typeof value === 'object' && value.constructor === Array;
	global.isObject = (value) => value && typeof value === 'object' && value.constructor === Object;
	global.isRegExp = (value) => value && typeof value === 'object' && value.constructor === RegExp;
	global.isError = (value) => value instanceof Error && typeof value.message !== 'undefined';
	global.isString = (value) => typeof value === 'string' || value instanceof String;
	global.isNumber = (value) => typeof value === 'number' && isFinite(value);
	global.isUndefined = (value) => typeof value === 'undefined';
	global.isFunction = (value) => typeof value === 'function';
	global.isBoolean = (value) => typeof value === 'boolean';
	global.isSymbol = (value) => typeof value === 'symbol';
	global.isDate = (value) => value instanceof Date;
	global.isNull = (value) => value === null;

	//////////////////////////////////////////////////////////////////////////80
	// Methods for determining whether something is or isn't
	//////////////////////////////////////////////////////////////////////////80
	global.trim = function(str, chr) {
		var rgxtrim = (!chr) ? new RegExp('^\\s+|\\s+$', 'g') : new RegExp('^' + chr + '+|' + chr + '+$', 'g');
		return str.replace(rgxtrim, '');
	};

	global.rtrim = function(str, chr) {
		var rgxtrim = (!chr) ? new RegExp('\\s+$') : new RegExp(chr + '+$');
		return str.replace(rgxtrim, '');
	};

	global.ltrim = function(str, chr) {
		var rgxtrim = (!chr) ? new RegExp('^\\s+') : new RegExp('^' + chr + '+');
		return str.replace(rgxtrim, '');
	};

	//////////////////////////////////////////////////////////////////////
	// Shorthand for sending to console
	//////////////////////////////////////////////////////////////////////
	global.log = Function.prototype.bind.call(console.log, console);
	global.trace = Function.prototype.bind.call(console.trace, console);

	//////////////////////////////////////////////////////////////////////
	// Shorthand for sending to console
	//////////////////////////////////////////////////////////////////////
	global.STACK = [];
	global.debug = (value) => global.STACK.push(value);

}());