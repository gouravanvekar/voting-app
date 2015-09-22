/**
 * Created by ganvekar on 9/21/2015.
 */
(function(){
    var app2 = angular.module('myVote', ["common.services", "ui.router", "votingResourceMock"]);
    app2.controller('CandidateController', ['$scope', 'candidateResource', function($scope, candidateResource){
        //Add $http as dependency
        //$http.get('voting_data.json')
        //     .then(function(voteData){
        //        $scope.candidates = voteData.data;
        //});

        candidateResource.query(function(data){
            console.log("working");
            $scope.candidates = data;
        });
    }]);
})();