angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.service('commonService', [function() {
    var loggedInEmail = {};
    this.getData = function () {
        return loggedInEmail;
    }
    this.setData = function (dataToSet) {
        loggedInEmail = dataToSet;
    }
}]);