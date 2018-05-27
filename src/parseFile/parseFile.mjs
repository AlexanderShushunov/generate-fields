export function parseFile(content) {
  return content
    .split('\n')
    .reduce(
      (acc, line) => {
        if (isType(line)) {
          return {
            ...acc,
            typeNameRead: true,
            typeName: parseTypeName(line)
          };
        } else if (isEndDefinition(line)) {
          return {
            ...acc,
            allFieldsRead: true
          };
        } else if (acc.typeNameRead && !acc.allFieldsRead) {
          return {
            ...acc,
            fields: [...acc.fields, parseField(line)]
          };
        } else return acc;
      },
      {
        typeName: '',
        fields: [],
        typeNameRead: false,
        allFieldsRead: false
      }
    );
}

export function isType(line) {
  return /export type/.test(line);
}

export function parseTypeName(line) {
  return /type (?<typeNmae>\S*)/.exec(line).groups.typeNmae;
}

export function parseField(line) {
  return /(?<field>\S*):/.exec(line).groups.field;
}

export function isEndDefinition(line) {
  return /\|\}/.test(line);
}
