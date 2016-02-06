import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-animated-headline', 'Integration | Component | ember animated headline', {
  integration: true
});

test('it renders', function(assert) {

  const option = 'foobar';
  this.set('options', [ option ]);
  this.render(hbs`{{ember-animated-headline options=options}}`);

  assert.equal(this.$().text().trim(), option, 'renders the passed options');
});
