/**
 * Created by ganvekar on 9/22/2015.
 */
(function(){
    angular.module('myVote')
        .controller('CandidateDetailsController', ['$scope', 'candidateResource', '$stateParams',
            function($scope, candidateResource, $stateParams){

            candidateResource.get({candidateId: $stateParams.candidateId}, function(data){
                $scope.currentCandidate = data;
            });
        }]);
})();