/**
 * Created by ganvekar on 9/21/2015.
 */
(function(){
    "use strict";
    var mockApp = angular
        .module("votingResourceMock", ["ngMockE2E"]);

    mockApp.run(function($httpBackend){
        var candidates = [
            {
                "candidateId": 1,
                "firstname": "John",
                "lastname": "Smith",
                "email": "sample1@example.com",
                "position": "Vice President",
                "profileImage": "assets/images/01.jpg",
                "voteCount": 0
            },
            {
                "candidateId": 2,
                "firstname": "Neil",
                "lastname": "Peterson",
                "email": "sample2@example.com",
                "position": "Director",
                "profileImage": "assets/images/02.jpg",
                "voteCount": 0
            },
            {
                "candidateId": 3,
                "firstname": "Matthew",
                "lastname": "Broad",
                "email": "sample3@example.com",
                "position": "President",
                "profileImage": "assets/images/03.jpg",
                "voteCount": 0
            },
            {
                "candidateId": 4,
                "firstname": "Adam",
                "lastname": "Watson",
                "email": "sample4@example.com",
                "position": "Vice President",
                "profileImage": "assets/images/04.jpg",
                "voteCount": 0
            },
            {
                "candidateId": 5,
                "firstname": "Martina",
                "lastname": "Williams",
                "email": "sample5@example.com",
                "position": "Vice President",
                "profileImage": "assets/images/05.jpg",
                "voteCount": 0
            },
            {
                "candidateId": 6,
                "firstname": "Yen",
                "lastname": "Lee",
                "email": "sample6@example.com",
                "position": "Director",
                "profileImage": "assets/images/06.jpg",
                "voteCount": 0
            },
            {
                "candidateId": 7,
                "firstname": "Jane",
                "lastname": "Doe",
                "email": "sample7@example.com",
                "position": "President",
                "profileImage": "assets/images/07.jpg",
                "voteCount": 0
            },
            {
                "candidateId": 8,
                "firstname": "Mark",
                "lastname": "Jones",
                "email": "sample8@example.com",
                "position": "Director",
                "profileImage": "assets/images/08.jpg",
                "voteCount": 0
            }
        ];
        var candidatesUrl = "/api/candidates";

        $httpBackend.whenGET(candidatesUrl).respond(candidates);
        var editRegex = new RegExp(candidatesUrl + "/[0-9][0-9]*", '');

        $httpBackend.whenGET(editRegex).respond(function(method, url, data){
            var candidate = {"candidateId": 0};
            var parameters = url.split("/");
            var length = parameters.length;
            var id = parameters[length-1];

            if(id > 0){
                for(var i=0; i < candidates.length; i++){
                    if (candidates[i].candidateId == id){
                        candidate = candidates[i];
                        break;
                    }
                };
            }
            return [200, candidate, {}]
        });

        $httpBackend.whenPOST(candidatesUrl).respond(function(method, url, data){
            var candidate = angular.fromJson(data);

            if(!candidate.candidateId){
                candidate.candidateId = candidates[candidates.length -1].candidateId + 1;
                candidates.push(candidate);
            }
            else{
                for(var i=0; i < candidates.length; i++){
                    if (candidates[i].candidateId == candidate.candidateId){
                        candidates[i] = candidate;
                        break;
                    }
                };
            }
            return [200, candidate, {}]
        });

        var positionUrl = "/api/vote";
        var positionRegex = new RegExp(positionUrl + "/[0-9][0-9]*", '');

        $httpBackend.whenGET(positionRegex).respond(function(method, url, data){
            var candidateFilter = [{}];
            var positions = ["President", "Vice President", "Director"];
            var parameters = url.split("/");
            var length = parameters.length;
            var id = parseInt(parameters[length-1]);

            console.log(id);
            if(id > 0 && id < positions.length){
                for(var i=0; i < candidates.length; i++){
                    if (candidates[i].position == positions[id]){
                        candidateFilter.push(candidates[i]);
                    }
                };
            }
            return [200, candidateFilter, {}]
        });

        $httpBackend.whenGET(/app/).passThrough();
    });
})();