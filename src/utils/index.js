/* eslint-disable import/prefer-default-export */

function findItemsByCategory(items, searchedSlug) {
  return items.filter((item) => item.category.slug === searchedSlug);
}

export { findItemsByCategory };
