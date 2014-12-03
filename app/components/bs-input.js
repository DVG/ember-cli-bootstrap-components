import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['form-group'],
  classNameBindings: ['hasError'],
  hasError: Ember.computed.notEmpty('errors')
});
