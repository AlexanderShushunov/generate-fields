import {typeNameToConstName} from './../typeNameToConstName';

export function findOutIndexFileName(filePath) {
  return /(?<path>.*\/).*\.js/.exec(filePath).groups.path + 'index.js';
}

export function buildExportStrings(filePath, typeName) {
  return `
export {${typeNameToConstName(typeName)}} from './${getFileName(
    filePath
  )}';
export type {${typeName}} from './${getFileName(filePath)}';
`;
}

function getFileName(filePath) {
  return /.*\/(?<name>[^/]*)\.js/.exec(filePath).groups.name;
}
