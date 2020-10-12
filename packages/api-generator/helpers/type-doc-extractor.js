const ts = require('typescript');

let checker;
let output;

function serializeSymbol(symbol) {
  return {
    name: symbol.getName(),
    description: ts.displayPartsToString(symbol.getDocumentationComment(checker)),
    type: checker.typeToString(
      checker.getTypeOfSymbolAtLocation(symbol, !symbol.valueDeclaration),
    ),
  };
}

function serializeInterface(symbol) {
  const details = serializeSymbol(symbol);

  details.members = [];
  symbol.members.forEach((value) => {
    details.members.push(serializeSymbol(value));
  });
  return details;
}

function visit(node) {
  if (ts.isInterfaceDeclaration(node) && node.name) {
    const symbol = checker.getSymbolAtLocation(node.name);
    if (symbol) {
      output.push(serializeInterface(symbol));
    }
  }
}

function extractTypeDoc(fileName) {
  const program = ts.createProgram([fileName], {
    target: ts.ScriptTarget.ES5,
  });

  checker = program.getTypeChecker();
  output = [];

  const sourceFile = program.getSourceFile(fileName);
  if (sourceFile.isDeclarationFile) {
    ts.forEachChild(sourceFile, visit);
  }

  return output;
}

module.exports = extractTypeDoc;
