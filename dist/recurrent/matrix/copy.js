"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = copy;
/*
 *
 * @param {Matrix} product
 * @param {Matrix} left
 */
function copy(product, left) {
  product.rows = parseInt(left.rows, 10);
  product.columns = parseInt(left.columns, 10);
  product.weights = left.weights.slice(0);
  product.deltas = left.deltas.slice(0);
}