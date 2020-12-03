function ifNotHelper(value, options) {
  return !value ? options.fn(this) : options.inverse(this);
}

function ifEqualHelper(arg1, arg2, options) {
  return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
}

function ifNotEqualHelper(arg1, arg2, options) {
  return (arg1 !== arg2) ? options.fn(this) : options.inverse(this);
}

function ifExistsHelper(value, options) {
  return value !== undefined ? options.fn(this) : options.inverse(this);
}

function ifHasDocumentationHelper(prop, options) {
  const nonTypeKeywords = prop.keywords && prop.keywords.filter((kw) => kw.name !== 'type');
  const hasNonTypeKeywords = !!(nonTypeKeywords && nonTypeKeywords.length);
  const hasDefaultValue = prop.defaultValue !== undefined;
  const hasDescription = !!prop.description;

  return (hasNonTypeKeywords || hasDefaultValue || hasDescription) ?
    options.fn(this) :
    options.inverse(this);
}

function defaultValueHelper(prop) {
  const value = prop.defaultValue;
  let { type } = prop.type;

  // Get internal value from a Union Type
  if (Array.isArray(type)) {
    const found = type.find((t) => t.value === value);
    if (found) type = found.type;
  }
  const returned = type === 'string' ? `'${value}'` : `${value}`;

  return returned;
}

const KnownTypes = {
  RippleOptions: { default: false, path: './Ripple' },
};

function importKnownTypesHelper(doc) {
  // Check doc from known types and add import statement to d.ts
  const imports = doc.data
    .map((p) => ({ type: p.type.text, ...KnownTypes[p.type.text] }))
    .filter((t) => !!t.path);
  return imports.map((i) => 'import ' +
    `${i.default ? '' : '{ '}` +
    `${i.type}` +
    `${i.default ? '' : ' }'} ` +
    `from '${i.path}';`);
}

function propTypeHelper(prop) {
  return `${prop.type.text}`;
}

function registerHelpers(handlebars) {
  handlebars.registerHelper('ifNot', ifNotHelper);
  handlebars.registerHelper('ifEqual', ifEqualHelper);
  handlebars.registerHelper('ifNotEqual', ifNotEqualHelper);
  handlebars.registerHelper('ifExists', ifExistsHelper);
  handlebars.registerHelper('ifHasDocumentation', ifHasDocumentationHelper);
  handlebars.registerHelper('defaultValue', defaultValueHelper);
  handlebars.registerHelper('propType', propTypeHelper);
  handlebars.registerHelper('importKnownTypes', importKnownTypesHelper);
}

module.exports.registerHelpers = registerHelpers;
