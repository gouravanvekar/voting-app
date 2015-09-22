/**
 * Created by ganvekar on 9/22/2015.
 */
(function(){
    angular.module('myVote').
        controller('ResultsController', ['$scope', 'resultsResource', function($scope, resultsResource){

        resultsResource.query(function(data){
                $scope.candidates = data;
            });
        }]);
})();