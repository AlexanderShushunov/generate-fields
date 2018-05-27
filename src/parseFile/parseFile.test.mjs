import assert from 'assert';
import {
  isEndDefinition,
  isType,
  parseField,
  parseFile,
  parseTypeName
} from './parseFile';

describe('isType', function() {
  it('should identify type definition string', function() {
    assert.equal(
      isType('export type QuestionnaireBeneficiariesInformation = {|'),
      true
    );
  });
  it('should not identify other string', function() {
    assert.equal(isType("import {typeOfB} from './type-of-b';"), false);
  });
  it('should identify empty string', function() {
    assert.equal(isType(''), false);
  });
});

describe('parseTypeName', function() {
  it('should parse type definition', function() {
    assert.equal(
      parseTypeName('export type QuestionnaireBeneficiariesInformation = {|'),
      'QuestionnaireBeneficiariesInformation'
    );
  });
});

describe('parseField', function() {
  it('should parse type field name', function() {
    assert.equal(parseField('    isConfirmed: boolean'), 'isConfirmed');
  });
});

describe('isEndDefinition', function() {
  it('should identify an end of definition', function() {
    assert.equal(isEndDefinition('|};'), true);
  });
  it('should not identify an empty string', function() {
    assert.equal(isEndDefinition(''), false);
  });
  it('should not identify other strings', function() {
    assert.equal(isEndDefinition('    isConfirmed: boolean'), false);
    assert.equal(isEndDefinition("import {BeneficiariesInformation} from './beneficiaries-information';\n"), false);
  });
});

describe('parseFile', function() {
  it('should parse definition correctly', function() {
    const {typeName, fields} = parseFile(`
// @flow
import {BeneficiariesInformation} from './beneficiaries-information';

export type QuestionnaireBeneficiariesInformation = {|

    beneficiariesInformation: Array<BeneficiariesInformation>,
    isConfirmed: boolean
    
|};`);

    assert.equal(typeName, 'QuestionnaireBeneficiariesInformation');
    assert.equal(fields.length, 2);
    assert.equal(fields[0], 'beneficiariesInformation');
    assert.equal(fields[1], 'isConfirmed');
  });
});
