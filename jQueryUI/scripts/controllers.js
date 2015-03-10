angular.module('app.controllers', [])
.controller('HomeCtrl', function($scope, $http) {
	$scope.test = 'You\'re Home';
    $scope.textShow = false;
    $scope.saveButton = false;
    $scope.divContent = [ { id:'',content: "Original data " } ];
    console.log($scope.divContent[0].content);
    
    $scope.render = function(){
        $http.get('http://tiny-pizza-server.herokuapp.com/collections/FinalProject3')
        .success(function(response) {
//            $scope.content = '';
            console.log("Response: ");
            console.log(response[0].content);
//            for(var i=0; i < response.length; i++)
//            {
//                console.log("response data: ");
            // if we have changed and added content...
            if(response[0].content){
                console.log("Inside. divContent is: ");
                console.log($scope.divContent[0].content);
            }
            // For initial state when response is empty array
            else{
                $scope.divContent[0].content += " " + response[0].content; 
//                $scope.divContent[0].content += " "; 
            }
            
//            } // end of commented section
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
        console.log($scope.divContent[0].content)
//        $( "<textarea>" ).appendTo
        // take input from text area
        // display input to div once 'saved' button clicked
    };
    
    $scope.hideEdit = function(){
        $scope.textShow = false;
        $scope.saveButton = false;
//        content.content.append($scope.divContent[0]);
        $http.post('http://tiny-pizza-server.herokuapp.com/collections/FinalProject3', 
                   { content: $scope.divContent[0].content }); 
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