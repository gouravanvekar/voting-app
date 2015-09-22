(function(){
    "use strict";
    var app = angular.module('myVote', ["common.services", "ui.router", "votingResourceMock"]);

    app.config(["$stateProvider", "$urlRouterProvider",
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home', {
                    url: "/",
                    templateUrl: "app/common/templates/landing.html"
                })
                .state('candidates', {
                    url: "/candidates",
                    templateUrl: "app/candidate/candidateView.html",
                    controller: 'CandidateController as CandidateCtrl'
                })
                .state('candidateDetails', {
                    url: "/candidates/:candidateId",
                    templateUrl: "app/candidate/candidateDetails.html",
                    controller: 'CandidateDetailsController as DetailsCtrl'
                })
                .state('position', {
                    url: "/vote/:positionId",
                    templateUrl: "app/voting/votingCandidates.html",
                    controller: 'VoteController as VoteCtrl'
                })
                .state('results', {
                    url: "/results",
                    templateUrl: "app/results/resultsView.html",
                    controller: 'CandidateController as CandidateCtrl'
                })
        }
    ]);
})();