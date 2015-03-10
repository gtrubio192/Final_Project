angular.module('app.controllers', [])
.controller('HomeCtrl', function($scope, $http) {
	$scope.test = 'You\'re Home';
    $scope.textShow = false;
    $scope.saveButton = false;
//    $scope.divContent = [ { id:'',content: "Original data" } ];
//    console.log("Original: " + $scope.divContent[0].content);
    
    $scope.render = function(){
        $scope.divContent = [ { id:'',content: "Original data" } ];

        console.log("Top of render(): " + $scope.divContent[0].content)
        // if we have changed and added content...
        if($scope.divContent[0].content !== "Original data")
        {
            $http.get('http://tiny-pizza-server.herokuapp.com/collections/FinalProject3')
            .success(function(response) {
                console.log("In Success Render().");
                console.log("Response[0].content: ");
                console.log(response[0].content);
                console.log("Response[0] ");
                console.log(response[0]);
                
                // if we have changed and added content...
                if(response[0].content){
                    console.log("Inside Success. divContent is: ");
                    console.log($scope.divContent[0].content);
                }
                // else content is empty string...
                else{
                    $scope.divContent[0].content += " " + response[0].content; 
                }
            })
            .error(function(err){
                console.log(err);
            });
        }

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
    
    $scope.save = function(){
        $scope.textShow = false;
        $scope.saveButton = false;
        console.log("Changes to be posted in save()");
        console.log($scope.divContent[0].content)
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