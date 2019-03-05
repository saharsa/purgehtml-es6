"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.purgeHTML = void 0;

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/web.dom.iterable");

const regex = /<\/?[^>]+(>|$)/gmi;

const purgeHTML = function purgeHTML(templateString) {
  for (var _len = arguments.length, expressions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    expressions[_key - 1] = arguments[_key];
  }

  let finalPurgedString = '';

  if (Array.isArray(templateString)) {
    templateString.forEach((element, index) => {
      finalPurgedString = finalPurgedString.concat(element.replace(regex, ""));

      if (expressions[index] != undefined) {
        finalPurgedString = finalPurgedString.concat(expressions[index].replace(regex, ""));
      }
    });
  } else {
    finalPurgedString = templateString.replace(regex, "");
  }

  return finalPurgedString;
};

exports.purgeHTML = purgeHTML;