/**
 * Created by ganvekar on 9/22/2015.
 */
(function(){
    "use strict";
    angular
        .module("common.services")
        .factory("candidateResource", ["$resource", function($resource){
            return $resource("/api/candidates/:candidateId", {
                candidateId: '@candidateId'
            });
        }]);
})();