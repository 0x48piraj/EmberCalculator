import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('app', function() {
    this.route('calculator');
  });
  this.route('advcalc');
});

export default Router;
