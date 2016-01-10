import Ember from 'ember';
import layout from './template';

const ANIMATION_DELAY = 2500;
const { $ } = Ember;

export default Ember.Component.extend({

  // Attrs
  layout: layout,
  classNames: ['ember-animated-headline'],
  staticContent: 'The world needs more ',
  dynamicOptions: ['pizza', 'peace', 'potatoes'],

  // Hooks
  didInsertElement() {
    this._super(...arguments);
    const visibleWord = $('.ember-animated-headline--rotate-1').find('.ember-animated-headline__dynamic-option--visible');
    this._rotateFromWord(visibleWord);
  },

  // Methods
  _rotateFromWord(visibleWord) {
    const nextWord = this._nextWord(visibleWord);
    this._switchWords(visibleWord, nextWord);
    Ember.run.later(this, this._rotateFromWord, nextWord, ANIMATION_DELAY);
  },

  _nextWord(visibleWord) {
    return visibleWord.is(':last-child') ? visibleWord.parent().children().eq(0) : visibleWord.next() ;
  },

  _switchWords(oldWord, newWord) {
    oldWord.removeClass('ember-animated-headline__dynamic-option--visible').addClass('ember-animated-headline__dynamic-option--hidden');
    newWord.addClass('ember-animated-headline__dynamic-option--visible').removeClass('ember-animated-headline__dynamic-option--hidden');
  },
});
