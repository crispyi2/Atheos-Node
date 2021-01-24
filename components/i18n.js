//////////////////////////////////////////////////////////////////////////////80
// Atheos Controller
//////////////////////////////////////////////////////////////////////////////80
// Copyright (c) 2020 Liam Siira (liam@siira.io), distributed as-is and without
// warranty under the MIT License. See [root]/LICENSE.md for more.
// This information must remain intact.
//////////////////////////////////////////////////////////////////////////////80

(function(global) {
	'use strict';

	function compile(data, prefix = '') {
		let code = {};
		for(let key in data) {
			let value = data[key];
			if (isObject(value)) {
				let temp = compile(value, `${prefix}${key}_`);
				for(let k in temp) code[k] = temp[k];
			} else {
				key = rtrim(prefix + key, "_");
				code[key] =  value;
			}
		}
		return code;
	}

	const cache = compile(require('../languages/en.json'));

	const i18n = {
		handle: function(POST, SEND) {
			let action = POST('action');
			if (action === 'init') {
				SEND('success', {
					cache
				});
			}
		},
		translate: function(string, args) {
			if (!cache) 				return string;
			let result = string in cache ? cache[string] : string;
			log(result);
			return args ? result.replace('%s', args) : result;
		}
	};

	module.exports = i18n;

}(this));