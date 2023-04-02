// const itemsList = document.querySelectorAll('#categories li.item');
// const numberItems = itemsList.length;
// console.log(`Number of categories: ${numberItems}`);

// itemsList.forEach ((item) => {
//     console.log(`Category: ${item.querySelector('h2').textContent}`);
//     console.log(`Elements: ${item.querySelector('li').length}`);
// });

const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});