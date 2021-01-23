## Notes, by Liam Siira

The element IDs aren't easily changable, css files have them littered throughout & vaious components use them all over the place. Needs condensing.
CSS in JS everywhere.... A lot of the moving, transitions, hide and show are inside jquery functions instead of CSS classes and objects and I don't approve. It makes the JS very complex as well as locking transition animations inside many JS files instead of in the themes. Cosmetics should be controllable by the theme chosen by the user.

Global:
 * i18n: The language support will continue to degrade unless I make an active effort in testing it, and currently there is no way for plugins to include language files.

FrontEnd:
 * Need to implement a working crash log and global error system: Atheos should cache a global stack trace of sorts when an exception occurs to better suit bug reporting. While most of the issues that I've received are descriptive enough, it wuld be nice to be able to ask for them to grab a specific file from such and such location and upload it: A stack trace of what JS was trying to do, and potentially a list of the last X number of commands issued to the server. https://www.sitepoint.com/proper-error-handling-javascript/
 * A proper custom KeyBinding Menu, an idea would be able to have the user click on a KeyBinding item in teh menu and then press a key to get it's key and keycode, save them and then rebind them on settings load
 * A method to disable all animations, including the background gradient
 * A method to disable the username box. While it might reduce security, it's a per install option and is ultimately up the user.
 * The logo still needs some work, it's still to chaotic. This is a cool thing worth looking into: http://jsfiddle.net/Nqw99/26/
 * All toast messages should have a permanent home, allowing someone to look back at older toast messages
 * FlexBox needs to be enabled fro most of the front end design system. It would probably be much more performant
 * Feedback button -> Direct way to send me a message
 * https://codepen.io/j0be/pen/jWGVvV

Infrastructure:
 * I've created an endpoint for Atheos to reach out to, however I should find a better place to host the JSON files as I don't want people pinging my server that often; Seems promising: https://jsonbin.io/pricing
 * Add an ability to vote or suggest functions that should be brought into the core of Atheos


Backend:
 * It might be worth looking into having the JSON data hidden inside a php file in order to doubly prevent that data from getting out
 * File Paths should have the basepath removed in displaying them, such that absolute paths don't show the ENTIRE path, only from the project path down.



Atheos isn't vulnerable to CSRF because I do everything through Post requests now

Status cache
Error message format
Requirements meet



CheckList:
* Finish Atheos Documentation website.
* 

Security:
	I'd like to implement a JWT token, using one I made from another app a long while ago. It was a very simple implementation, but I'd like to have everything handled through the common.php class. Right now, I'm noticing that it requests common on every single php file, so it might be worth considering having that file be the sole authenticator more than it already is. Have it parse JWTs both on load and on reply.
	Curious what he is doing: https://github.com/mitchellurgero/Codiad/commits/master
		https://medium.com/@theflyingmantis/session-vs-jwt-token-based-authentication-2e85ff6c8f42
		https://float-middle.com/json-web-tokens-jwt-vs-sessions/
		https://hackernoon.com/auth-headers-vs-jwt-vs-sessions-how-to-choose-the-right-auth-technique-for-apis-57e15edd053

	Implement a detection system for loading things over non-https / unsecure connections using the secureJS in Util



https://ishadeed.com/article/spacing-in-css/
https://github.com/peekobot/peekobot
https://github.com/miconda/gitpushub