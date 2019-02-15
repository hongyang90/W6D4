const DOMNodeCollection = require('./dom_node_collection');

const core = function(arg) {
  let arr;
  if (arg instanceof HTMLElement) {
    arr = Array.from(arguments);
  } else {
    const nodeList = document.querySelectorAll(arg);
    arr = Array.from(nodeList);
  }
  return new DOMNodeCollection(arr);
};

window.$l = core;