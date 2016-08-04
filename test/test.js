var assert = require('assert'),
    uw = require('../unicodeWidth');

describe('unicode-width', function() {
  it('Fullwidth', function() {
    assert.equal('F', uw.getWidth('￠'));
    assert.equal('F', uw.getWidth('￦'));
  });

  it('Halfwidth', function() {
    assert.equal('H', uw.getWidth('｡'));
    assert.equal('H', uw.getWidth('ￜ'));
  });

  it('Wide', function() {
    assert.equal('W', uw.getWidth('ㄅ'));
    assert.equal('W', uw.getWidth('뀀'));
  });

  it('Narrow', function() {
    assert.equal('Na', uw.getWidth('¢'));
    assert.equal('Na', uw.getWidth('⟭'));
    assert.equal('Na', uw.getWidth('a'));
  });

  it('Ambiguous', function() {
    assert.equal('A', uw.getWidth('⊙'));
    assert.equal('A', uw.getWidth('①'));
  });

  it('Natural', function() {
    assert.equal('N', uw.getWidth('ب'));
    assert.equal('N', uw.getWidth('ف'));
  });
});

describe('characterLength', function() {
  it('Fullwidth', function() {
    assert.equal(2, uw.characterLength('￠'));
    assert.equal(2, uw.characterLength('￦'));
  });

  it('Halfwidth', function() {
    assert.equal(1, uw.characterLength('｡'));
    assert.equal(1, uw.characterLength('ￜ'));
  });

  it('Wide', function() {
    assert.equal(2, uw.characterLength('ㄅ'));
    assert.equal(2, uw.characterLength('뀀'));
  });

  it('Narrow', function() {
    assert.equal(1, uw.characterLength('¢'));
    assert.equal(1, uw.characterLength('⟭'));
    assert.equal(1, uw.characterLength('a'));
  });

  it('Ambiguous', function() {
    assert.equal(2, uw.characterLength('⊙'));
    assert.equal(2, uw.characterLength('①'));
  });

  it('Natural', function() {
    assert.equal(1, uw.characterLength('ب'));
    assert.equal(1, uw.characterLength('ف'));
  });
});


describe('length', function() {
  it('Fullwidth', function() {
    assert.equal(10, uw.length('あいうえお'));
  });

  it('Halfwidth', function() {
    assert.equal(7, uw.length('abcdefg'));
  });

  it('Mixed', function() {
    assert.equal(19, uw.length('￠￦｡ￜㄅ뀀¢⟭a⊙①بف'));
  });
});
