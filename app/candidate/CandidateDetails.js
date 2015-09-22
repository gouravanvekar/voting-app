/**
 * Created by ganvekar on 9/22/2015.
 */
(function(){
    angular.module('myVote')
        .controller('CandidateDetailsController', ['$scope', 'candidateResource', '$stateParams',
            function($scope, candidateResource, $stateParams){

            candidateResource.get({candidateId: $stateParams.candidateId}, function(data){
                $scope.currentCandidate = data;
                for (var position in $scope.positions) {
                    if ($scope.currentCandidate.position === position.name && position.status === 'completed') {
                        $scope.voted = true;
                        break;
                    }
                }
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


            $scope.registerVote = function(){
                $scope.currentCandidate.voteCount += 1;
                $scope.currentCandidate.$save();

                for (var position in $scope.positions) {
                    if ($scope.currentCandidate.position === position.name) {
                        position.status = 'completed';
                        break;
                    }
                }
                $scope.voted = true;
            }
        }]);
})();