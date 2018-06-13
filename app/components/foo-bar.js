import Ember from 'ember';

export default Ember.Component.extend({
  value: 1,
  number: Ember.computed('value', function() {
    return this.value;
  }),
  actions: {
    add() {
      Ember.set(this, 'value', 2);
    }
  }
});
