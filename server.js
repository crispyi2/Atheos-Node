const express = require('express'),
	handlebars = require("express-handlebars"),
	session = require('express-session'),
	compression = require('compression'),
	cookieParser = require('cookie-parser');

global.common = require('./common.js');

const controller = require('./controller.js');

const app = express();
const hbs = handlebars.create({
	extname: 'hbs',
	helpers: {
		i18n: common.i18n.translate
	}
});

// initialize body-parser to parse incoming parameters requests to req.body
app.use(express.urlencoded({
	extended: true
}));

// initialize cookie-parser to allow us access the cookies stored in the browser. 
app.use(cookieParser());
app.use(compression());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
	key: 'user_sid',
	secret: 'somerandonstuffs',
	resave: false,
	saveUninitialized: false,
	cookie: {
		expires: 600000
	}
}));

// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
	if (req.cookies.user_sid && !req.session.user) res.clearCookie('user_sid');
	next();
});


app.engine('hbs', hbs.engine);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use('/favicons', express.static('public/favicons_green'));
app.use('/components', express.static('components'));
app.use('/fonts', express.static('public/fonts'));
app.use('/modules', express.static('public/modules'));
app.use('/theme', express.static('public/theme'));

// route for Home-Page
app.route('/').get((req, res) => {
	if (req.session.user && req.cookies.user_sid) {
		res.render('login', sources);
	} else {
		res.render('login', sources);
	}
});

app.route('/controller').post(controller);


// route for user logout
app.get('/logout', (req, res) => {
	if (req.session.user && req.cookies.user_sid) {
		res.clearCookie('user_sid');
		res.redirect('/');
	} else {
		res.redirect('/login');
	}
});

// route for handling 404 requests(unavailable routes)
app.use(function(req, res, next) {
	res.status(404).send("Sorry can't find that!");
});

const port = process.env.PORT || 3000;
const http = app.listen(port, () => log(`App listening on port ${port}`));