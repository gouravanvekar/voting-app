(function(){
    "use strict";
    var app = angular.module('myVote', ["common.services", "ui.router", "votingResourceMock"]);

    app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider",
        function($stateProvider, $urlRouterProvider, $locationProvider) {
            //$locationProvider.html5Mode({
            //    enabled: true,
            //    requireBase: false
            //});

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
                .state('position', {
                    url: "/vote/:positionId",
                    templateUrl: "app/voting/votingCandidates.html",
                    controller: 'VoteController as VoteCtrl'
                })
                .state('results', {
                    url: "/results",
                    templateUrl: "app/results/resultsView.html",
                    controller: 'ResultsController as ResultsCtrl'
                })
        }
    ]);
})();