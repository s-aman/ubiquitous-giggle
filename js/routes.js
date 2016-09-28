angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('sendWithRelay.myPackages', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myPackages.html',
        controller: 'myPackagesCtrl'
      }
    }
  })

  .state('sendWithRelay.senderAddress', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/senderAddress.html',
        controller: 'senderAddressCtrl'
      }
    }
  })

  .state('sendWithRelay.destinationAddress', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/destinationAddress.html',
        controller: 'destinationAddressCtrl'
      }
    }
  })

  .state('sendWithRelay.dimensions', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dimensions.html',
        controller: 'dimensionsCtrl'
      }
    }
  })

  .state('sendWithRelay.carrierFound', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/carrierFound.html',
        controller: 'carrierFoundCtrl'
      }
    }
  })

  .state('sendWithRelay.carrierContacted', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/carrierContacted.html',
        controller: 'carrierContactedCtrl'
      }
    }
  })

  .state('sendWithRelay.weightSelection', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/weightSelection.html',
        controller: 'weightSelectionCtrl'
      }
    }
  })

  .state('sendWithRelay.payment', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/payment.html',
        controller: 'paymentCtrl'
      }
    }
  })

  .state('sendWithRelay.carryWithRelay', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/carryWithRelay.html',
        controller: 'carryWithRelayCtrl'
      }
    }
  })

  .state('sendWithRelay', {
    url: '/side-menu21',
    templateUrl: 'templates/sendWithRelay.html',
    controller: 'sendWithRelayCtrl'
  })

  .state('sendWithRelay.carrierProfile', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/carrierProfile.html',
        controller: 'carrierProfileCtrl'
      }
    }
  })

  .state('sendWithRelay.relay', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/relay.html',
        controller: 'relayCtrl'
      }
    }
  })

  .state('sendWithRelay.login', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page12')

  

});