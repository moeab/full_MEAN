var friends = require('.././server/controllers/friends.js');
module.exports = function(app){
	app.get('/friends', friends.show);
	app.post('/new_friend', friends.new_friend);
	app.delete('/remove_friend/:name', friends.remove_friend);
};