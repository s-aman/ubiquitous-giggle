angular.module('app.controllers', [])
  
.controller('myPackagesCtrl', ['$scope', '$stateParams', 'commonService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, commonService) {
//$scope.loggedInEmailCustomVar = commonService.getData();

$scope.$on('dataAdded', function(event, data) {
        $scope.loggedInEmailCustomVar = commonService.getData();
    })
}])
   
.controller('senderAddressCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('destinationAddressCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('dimensionsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('carrierFoundCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('carrierContactedCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('weightSelectionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('paymentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('carryWithRelayCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('sendWithRelayCtrl', function ($scope, $stateParams, $state, Auth, $firebaseObject) {
var ref = firebase.database().ref();
  $scope.auth = Auth;
  
$scope.logout = function() {
      console.log("logging out");
      $scope.auth.$signOut();
      $state.go('sendWithRelay.login');
    };

})
   
.controller('carrierProfileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('relayCtrl', function($scope, $state, Auth, $firebaseObject, commonService) {
  var ref = firebase.database().ref();
  $scope.exception = {};
//commonService.setData($scope.register.email);
  Auth.$onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      console.log("Logged in as:", firebaseUser.uid);
	  //commonService.setData($scope.register.email);
      var refUsers = firebase.database().ref().child("users/" + firebaseUser.uid);
      var users = $firebaseObject(refUsers);
      users.$bindTo($scope, "users");
	  console.log('fname'+$scope.register.fullname);
      users.fullname = $scope.register.fullname;
      users.$save().then(function(refUsers) {
		  console.log('wooooo '+users.key());
	  }
, function(error) {
            console.log("Error:", error);
        });      $state.go('sendWithRelay.myPackages');
    } else {
      console.log("Logged out");
    }
  });

  $scope.register = function() {
    
    if ($scope.register.fullname && $scope.register.email && $scope.register.password) {

      Auth.$createUserWithEmailAndPassword($scope.register.email, $scope.register.password).then(function(firebaseUser) {
        return firebaseUser;
      }).catch(function(error) {
        $scope.exception.message = error.message;
        $scope.exception.code = error.code;
      });
    }
  };
})
   
.controller('loginCtrl', function($scope, $state, Auth, $location, commonService, $rootScope) {
  var ref = firebase.database().ref();
  $scope.auth = Auth;
  $scope.userLogin = {};
  $scope.exception = {};

  Auth.$onAuthStateChanged(function(authData) {
      if (authData) {
		  console.log(authData);
        console.log('hey rits authdata is: '+authData.email);
		//console.log('hey rits authdata is: '+authData.fullname);
		commonService.setData(authData.email);
		$rootScope.$broadcast('dataAdded', authData.email);
		
		$state.go('sendWithRelay.myPackages');
     } else {
       $scope.loggedInInfo = "Please login!";
     }
  });
/*
  $scope.showRegisterForm = function() {
    $state.go('register');
  };
  
  $scope.usertype = function() {
    $state.go('usertype');
  };*/

  $scope.login = function() {

    $scope.auth.$signInWithEmailAndPassword($scope.userLogin.email,$scope.userLogin.password).then(function(authData) {
      console.log(authData); // handling auth on promise
    }).catch(function(error) {
      if (error.code == 'auth/user-not-found') {
        $scope.exception.message = 'User not found. Please register first.';
      } else {
        $scope.exception.message = error.message;
      }
      $scope.exception.code = error.code;
    });
  };

});
 