import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    this.transitionTo('slides.01-ember-concurrency-title');
  }
});
