var friends_app = angular.module('friends_app', []);

    friends_app.factory('friendsFactory', function($http){
        var friends = [];
        var factory = {};
        factory.getFriends = function(callback){
            $http.get('/friends').success(function(friends){
                callback(friends);
            })
        }
        factory.addFriend = function(info, callback){
            $http.post('/new_friend', info).success(function(){
                callback();
            })
        }
        factory.removeFriend = function(FriendName, callback){
            $http.delete('/remove_friend/' + FriendName).success(function(){
                callback()
            })
        }
        return factory;
    })
    friends_app.controller('friendsController', function($scope, friendsFactory){
        var that = this;
        this.getFriends = function(){
          friendsFactory.getFriends(function(data){
                  $scope.friends = data;
              });
        }
        that.getFriends();
        
        $scope.addFriend = function(){
            $scope.name;
            $scope.age;
            if ($scope.name != null && $scope.age != null){
                $scope.new_friend = {name : $scope.name, age : $scope.age}
                friendsFactory.addFriend($scope.new_friend, that.getFriends);
                $scope.error = '';
                $scope.name = '';
                $scope.age = '';
            } else {
                $scope.error = 'Fields cannot be empty';
            }
        }
        $scope.removeFriend = function(FriendName){
            friendsFactory.removeFriend(FriendName, that.getFriends
            );
        }
    })