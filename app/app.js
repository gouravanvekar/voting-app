(function(){
    "use strict";
    var app = angular.module('myVote', ["common.services", "ui.router", "votingResourceMock", "ui.grid", "nvd3"]);

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
                    controller: 'ResultsController as ResultsCtrl'
                })
                .state('analysis', {
                    url: "/analysis",
                    templateUrl: "app/results/chartView.html",
                    controller: 'ResultsController as ResultsCtrl'
                })
                .state('winners', {
                    url: "/winners",
                    templateUrl: "app/results/winnersView.html",
                    controller: 'ResultsController as ResultsCtrl'
                })
        }
    ]);
})();