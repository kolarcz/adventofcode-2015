import path from 'path';
import assert from 'assert';

let script = require(__filename.replace(/_test\.js$/, '_solution.js'));

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run('>'), 2);
  });

  it('example 2', () => {
    assert.equal(script.run('^>v<'), 4);
  });

  it('example 3', () => {
    assert.equal(script.run('^v^v^v^v^v'), 2);
  });

});
