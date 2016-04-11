import 'bootstrap/dist/css/bootstrap.css';
import jquery from 'jquery';
import angular from 'angular';
import angularanimate from 'angular-animate';
import angularfire from 'angularfire';
import uirouter from 'angular-ui-router';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;