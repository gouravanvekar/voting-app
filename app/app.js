(function(){
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
                    templateUrl: "app/candidates/candidatesListView.html",
                    controller: 'CandidateController as CandidateCtrl'
                })
                .state('position', {
                    url: "/vote/0",
                    templateUrl: "app/vote/votingCandidates.html",
                    controller: 'CandidateController as VoteCtrl'
                })
        }
    ]);
})();