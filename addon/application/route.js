import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return ['one', 'two', 'three'];
  }
});
