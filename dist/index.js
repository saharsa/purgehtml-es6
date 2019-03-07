"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.purgeHTML = void 0;

require("core-js/modules/es6.regexp.replace");

const regex = /<\/?[^>]+(>|$)/gmi;

const purgeHTML = function purgeHTML(templateString) {
  for (var _len = arguments.length, expressions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    expressions[_key - 1] = arguments[_key];
  }

  if (Array.isArray(templateString)) {
    templateString = templateString.reduce((prev, next, i) => {
      return `${prev}${expressions[i - 1] || ''}${next}`;
    });
  } else {
    templateString = templateString.concat(expressions.join(''));
  }

  return replaceByRegex(templateString);
};

exports.purgeHTML = purgeHTML;

const replaceByRegex = stringToConvert => {
  return stringToConvert.replace(regex, "");
};