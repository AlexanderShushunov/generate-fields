import fs from 'fs/promises';
import {parseFile} from './parseFile/parseFile';
import {makeDefinitions} from './makeDefinitions';

generateFields();

async function generateFields() {
  const fileWithType = process.argv[2];
  console.log('file - ', fileWithType);
  const content = await fs.readFile(fileWithType, 'utf-8');
  const {typeName, fields} = await parseFile(content);
  const fieldsDefinition = makeDefinitions(typeName, fields);
  console.log('result - ', fieldsDefinition);
  await fs.appendFile(fileWithType, fieldsDefinition);
}
