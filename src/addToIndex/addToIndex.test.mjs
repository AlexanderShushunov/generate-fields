import assert from 'assert';
import {buildExportStrings, findOutIndexFileName} from './addToIndex';

describe('findOutIndexFileName', function() {
  it('should make absolute index file name', function() {
    assert.equal(
      findOutIndexFileName('/Projects/a/b/c/type-a.js'),
      '/Projects/a/b/c/index.js'
    );
  });
  it('should make relative index file name', function() {
    assert.equal(findOutIndexFileName('./c/type-a.js'), './c/index.js');
  });
});

describe('buildExportStrings', function() {
  it('should buildExportStrings', function() {
    assert.equal(
      buildExportStrings('./a/b/type-a.js', 'TypeA'),
      `
export {typeAFields} from './type-a';
export type {TypeA} from './type-a';
`
    );
  });
});
