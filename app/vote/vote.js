/**
 * Created by ganvekar on 9/21/2015.
 */
(function(){
    angular.module('myVote')
        .controller('VoteController', ['$scope', 'votingResource', function($scope, votingResource){

            votingResource.query(function(data){
            $scope.candidates = data;
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