export function typeNameToConstName(typeName) {
  const [firstLetter, ...rest] = typeName;
  return [firstLetter.toLowerCase(), ...rest].join('') + 'Fields';
}
