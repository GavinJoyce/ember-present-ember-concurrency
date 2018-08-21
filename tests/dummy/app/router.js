import EmberPresentRouter from 'ember-present/routing/router';
import config from './config/environment';

const Router = EmberPresentRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('slides', function() {
    this.slide('01-ember-concurrency-title', { transition: 'slide' });
    this.slide('02-ember-concurrency-none', { transition: 'slide' });
    this.slide('03-ember-concurrency-drop', { transition: 'slide' });
    this.slide('04-ember-concurrency-enqueue', { transition: 'slide' });
  });
});

export default Router;
