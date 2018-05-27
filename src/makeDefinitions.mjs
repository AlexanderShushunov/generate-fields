export function makeDefinitions(typeName, fields) {
  return `
${constDeclaration(typeName)} = {
${fieldsDeclaration(fields)}
};
`;
}

function constDeclaration(typeName) {
  return `export const ${typeName}Fields: {[$Keys<${typeName}>]: string]`;
}

function fieldsDeclaration(fields) {
  return fields.map(field => `    ${field}: '${field}'`).join(',\n');
}
