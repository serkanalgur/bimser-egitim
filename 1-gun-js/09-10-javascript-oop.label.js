var App = {
	Social: {
		Facebook: {}
	}
};

App.logtut = function (users) {
	document.write("Logumuz: " + users)
}

App.Social.logs = function (username) {
	this.Facebook.login(username);
}
App.Social.Facebook.login = function (username) {
	document.write(username + '<br />')
	App.logtut(username)
};

App.Social.Facebook.login("serkanalgur")
App.Social.logs("serkanals")
