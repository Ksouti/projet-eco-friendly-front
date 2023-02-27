/* eslint-disable import/prefer-default-export */

/**
 * Find element in array
 *
 * @param {Array} items - Array of data
 * @param {string} Element - Element to find
 * @param {string} param - Parameter to find (like 'id', 'name', 'slug')
 * @returns {Object}
 */
function findElementInArray(items, element, param) {
  return items.find((item) => item[param] === element);
}

export { findElementInArray };
