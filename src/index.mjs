import fs from 'fs/promises';
import {parseFile} from './parseFile';
import {makeDefinitions} from './makeDefinitions';
import {findOutIndexFileName, buildExportStrings} from './addToIndex/index';

generateFields();

async function generateFields() {
  const fileWithType = process.argv[2];
  console.log('file - ', fileWithType);
  const content = await fs.readFile(fileWithType, 'utf-8');
  const {typeName, fields} = await parseFile(content);
  const fieldsDefinition = makeDefinitions(typeName, fields);
  console.log('result - ', fieldsDefinition);
  await fs.appendFile(fileWithType, fieldsDefinition);

  const indexFileName = findOutIndexFileName(fileWithType);
  console.log('index - ', indexFileName);
  const exportString = buildExportStrings(fileWithType, typeName);
  console.log('export - ', exportString);
  await fs.appendFile(indexFileName, exportString);
}
