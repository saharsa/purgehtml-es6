"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.purgeHTML = void 0;

require("core-js/modules/es6.regexp.replace");

const purgeHTML = templateString => {
  const regex = /<\/?[^>]+(>|$)/gmi;
  const purgedString = templateString.replace(regex, "");
  return purgedString;
};

exports.purgeHTML = purgeHTML;