/**
 *  Public: A FunctionDeclaration
 *
 *  * `param1` {String} description
 *  * `param2` {Object} description
 *
 *  Returns {Boolean} always true.
 */
function newFunc(param1, param2 ={}) {
  return Boolean(true);
}

const anotherFun = (optionalParam = false) => {
  if(optionalParam) return optionalParam;
  if(!optionalParam) return optionalParam;
}

export default class Poop {
  /**
   *  Public: makes a new poop instance
   *
   *  * `test` {String} literally any string.
   *
   *  ## Examples
   *
   *  Super easy to use:
   *
   *  ```js
   *  const poop = new Poop('a test');
   *  ```
   */
  constructor(test) {
    this.test = test;
  }
}

let newVarFunction = function (param) {
  console.log(param);
}

const _typeHandlers = {
  /**
   *  Public: function declaration
   *
   *  * `dumb` {Object} Spidermonkey AST node
   *  * `arr` {Array} of {Objects}
   *  * `returnsArr` {Array} of Returns
   */
  objectFunction(node, arr, returnsArr) {
    const name = node.id.name || false;
    const args = _parseParams(node.params);
    const returns = _getReturns(node, returnsArr);
    const result = new Method(node.type, name, false, node.start, node.end, args, returns);
    arr.push(result);
  },
}
