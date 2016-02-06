import Ember from 'ember';
import layout from './template';

const ANIMATION_DELAY = 2500;
const { $, computed } = Ember;

export default Ember.Component.extend({

  // Attrs
  layout: layout,
  classNames: ['ember-animated-headline'],
  delay: ANIMATION_DELAY,
  tagName: '',
  options: [],

  // CPs
  firstOption: computed('options.[]', function() {
    return this.get('options')[0];
  }),

  restOptions: computed('options.[]', function() {
    const options = this.get('options');
    return options.slice(1, options.length);
  }),

  // Hooks
  didInsertElement() {
    this._super(...arguments);
    const visibleWord = $('.ember-animated-headline').find('.ember-animated-headline__dynamic-option--visible');
    this._rotateFromWord(visibleWord);
  },

  // Methods
  _rotateFromWord(visibleWord) {
    const nextWord = this._nextWord(visibleWord);
    this._switchWords(visibleWord, nextWord);
    Ember.run.later(this, this._rotateFromWord, nextWord, this.get('delay'));
  },

  _nextWord(visibleWord) {
    return visibleWord.is(':last-child') ? visibleWord.parent().children().eq(0) : visibleWord.next();
  },

  _switchWords(oldWord, newWord) {
    oldWord.removeClass('ember-animated-headline__dynamic-option--visible').addClass('ember-animated-headline__dynamic-option--hidden');
    newWord.addClass('ember-animated-headline__dynamic-option--visible').removeClass('ember-animated-headline__dynamic-option--hidden');
  },
});
