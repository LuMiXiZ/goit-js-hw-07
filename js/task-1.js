const catNum = document.querySelectorAll(".item");
console.log(`Number of categories: ${catNum.length}`);
for (const cat of catNum) {
    const title = cat.querySelector('h2').textContent;
    const itemsCount = cat.querySelectorAll('ul li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsCount}`);
}