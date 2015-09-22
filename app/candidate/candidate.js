/**
 * Created by ganvekar on 9/22/2015.
 */
(function(){
    angular.module('myVote').
        controller('CandidateController', ['$scope', 'candidateResource', function($scope, candidateResource){

            candidateResource.query(function(data){
                $scope.candidates = data;
            });
        }]);
})();