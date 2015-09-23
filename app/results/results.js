/**
 * Created by ganvekar on 9/22/2015.
 */
(function(){
    angular.module('myVote').
        controller('ResultsController', ['$scope', 'candidateResource', function($scope, candidateResource){

        candidateResource.query(function(data){
            $scope.candidateResults = [];

            data.forEach(function(item){
                var newCandidate = {
                    "name": item.firstname + ' ' + item.lastname,
                    "position": item.position,
                    "votes": item.voteCount
                    //,
                    //"profileImage": item.profileImage
                };
                $scope.candidateResults.push(newCandidate);
            });
            });

            $scope.gridOptions = {
                enableFiltering: true,
                columnDefs: [
                    { field: 'name', width: '30%' },
                    { field: 'position'  },
                    { field: 'votes'  }
                    //,
                    //{ field: 'profileImage', cellTemplate:"<img width=\"50px\" height=\"50px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>"}
                ],
                data: $scope.candidateResults
            };

        }]);
})();