(function(){
	var app = angular.module('myVote', []);

    app.controller('VoteController', ['$scope', '$http', function($scope, $http){
        $http.get('voting_data.json').then(function(voteData){
            $scope.candidates = voteData.data;
        });
        $scope.positions = [{
                name: 'President',
                status: 'active'
            },
            {
                name: 'Vice President',
                status: 'active'
            },
            {
                name: 'Director',
                status: 'active'
            }
        ];

        $scope.getPositionStatus = function(){
            return positions[currentPositionIndex].status;
        }

        $scope.setPosition = function(positionIndex){
            $scope.currentPositionIndex = positionIndex;
            $scope.positionFilter = $scope.positions[$scope.currentPositionIndex].name;
            $scope.displayResults = false;

            console.log($scope.positionFilter);
        }

        $scope.registerVote = function(candidateIndex) {
            $scope.candidates[candidateIndex].voteCount += 1;

            for (var position in $scope.positions) {
                if ($scope.candidates[candidateIndex].position === position) {
                    position.status = 'completed';
                }
            }

            console.log('Name: ' + $scope.candidates[candidateIndex].firstname + ' Votes: ' + $scope.candidates[candidateIndex].voteCount)
        }

        $scope.showResults = function(){
            $scope.displayResults = true;
        }
    }]);
})();