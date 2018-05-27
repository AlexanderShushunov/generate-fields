export function makeDefinitions(typeName, fields) {
  return `
${constDeclaration(typeName)} = {
${fieldsDeclaration(fields)}
};
`;
}

function constDeclaration(typeName) {
  return `export const ${firstLetterToLowerCase(typeName)}Fields: {[$Keys<${typeName}>]: string}`;
}

function firstLetterToLowerCase(typeName) {
  const [firstLetter, ...rest] = typeName;
  return [firstLetter.toLowerCase(), ...rest].join('');
}


function fieldsDeclaration(fields) {
  return fields.map(field => `    ${field}: '${field}'`).join(',\n');
}
