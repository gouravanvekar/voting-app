(function(){
	var app = angular.module('myVote', []);

    app.controller('VoteController', ['$scope', '$http', function($scope, $http){
        $http.get('voting_data.json').then(function(voteData){
            $scope.candidates = voteData.data;
            console.log(candidates[0]);
        });
        //$scope.positionFilter = "President";

        $scope.setPosition = function(position){
            $scope.positionFilter = position;
        }
    }]);
})();