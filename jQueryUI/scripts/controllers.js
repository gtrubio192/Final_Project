angular.module('app.controllers', [])
.controller('HomeCtrl', function($scope, $http) {
	$scope.test = 'You\'re Home';
    $scope.textShow = false;
    $scope.saveButton = false;
    $scope.divContent = [];
    
    $scope.render = function(){
        $http.get('http://tiny-pizza-server.herokuapp.com/collections/FinalProject')
        .success(function(response) {
//            $scope.content = '';
            console.log("Response: ");
            console.log(response);
            for(var i=0; i < response.length; i++)
            {
                console.log("response data: ");
                if(response[i]){
                    $scope.divContent.push(response[i].content);  
                    console.log(response[i]);
                }
            }
        })
        .error(function(err){
            console.log(err);
        });
    };
    
    $scope.render();

    $scope.edit = function(){
        // show textarea, setting to true also hides div
        $scope.textShow = true;
        $scope.saveButton = true;
        // take input from text area
        // display input to div once 'saved' button clicked
    };
    
    $scope.hideEdit = function(content){
        $scope.textShow = false;
        $scope.saveButton = false;
        $http.post('http://tiny-pizza-server.herokuapp.com/collections/FinalProject', 
                   { content: content }); 
        $scope.render();
    };
    
    $scope.goPlay = function() {
		console.log('goGame');
		$state.go('game');
	};
    $scope.goSettings = function() {
		console.log('goSettings');
		$state.go('settings');
	};
    $scope.goLeader = function() {
		console.log('goLeader');
		$state.go('leader');
	};
})
.controller('GameCtrl', function($scope, $state) {
	$scope.test = 'Game Time';
})
.controller('SettingsCtrl', function($scope) {
	$scope.test = 'Settings';
})
.controller('LeaderCtrl', function($scope) {
	$scope.test = 'Leader Board';
});