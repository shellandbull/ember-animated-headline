import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('ember-animated-headline', 'Integration | Component | ember animated headline', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);
  const option = 'foobar';
  this.set('options', [option]);
  this.render(hbs`{{ember-animated-headline options=options}}`);

  assert.equal(this.$().text().trim(), option, 'renders the passed options');
});

test('Word rotation', function(assert) {
  const firstOption = 'uno';
  const secondOption = 'dos';
  const oneSecond = 1000;
  const oneSecondAndAHalf = oneSecond * 1.5;

  this.set('delay', oneSecond);
  this.set('options', [secondOption, firstOption]);

  this.render(hbs`{{ember-animated-headline options=options delay=oneSecond}}`);
  const visibleOption = this.$('.ember-animated-headline__dynamic-option--visible');
  assert.equal(visibleOption.text().trim(), firstOption, 'renders the first option on render');

  Ember.run.later(this, () => { assert.equal(visibleOption.text().trim(), secondOption, 'renders the second option'); }, oneSecondAndAHalf);
});
