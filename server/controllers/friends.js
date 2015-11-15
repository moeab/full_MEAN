var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = (function() {
  return {
    show: function(req, res) {
    	Friend.find({}, function(err, result){
    		if (err){
    			console.log(err);
    		} else {
    			res.json(result)
    		}
    	})
    },
    new_friend: function(req, res){
        var friend = new Friend({name : req.body.name, age : req.body.age});
        friend.save(function(err){
            if(err){
                console.log(err);
            } else {
                res.json({});
            }
        })
    },
    remove_friend: function(req, res){
        Friend.remove({name : req.params.name}, function(err){
            if(err){
                console.log(err); 
            } else {
                res.json({});
            }
        })
    }
  }
})();