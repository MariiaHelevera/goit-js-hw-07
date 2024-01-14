const categories = document.querySelectorAll('#categories .item');
console.log('Number of categories:', categories.length);

categories.forEach(function(category) {
  const categoryName = category.querySelector('h2').textContent;
  console.log('Category: ', categoryName);

  const numberOfItems = category.querySelectorAll('ul > li').length;
  console.log('Elements:', numberOfItems);
});