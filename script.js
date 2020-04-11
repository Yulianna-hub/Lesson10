' use strict ';
//Восстановить порядок книг.
const booklist = document.querySelectorAll('.book');
booklist[1].after(booklist[0]);
booklist[4].after(booklist[3]);
booklist[5].after(booklist[2]);
console.log(booklist);

const replaceImg = document.querySelector('body');
console.log(replaceImg);
replaceImg.setAttribute('style', 'background-image: url(./image/books.jpg)');

const repleceTitl = document.querySelectorAll('a')[2];

repleceTitl.text = 'Книга 3. this и Прототипы Объектов';
console.log(repleceTitl);

const advertising = document.querySelector('.adv');
advertising.remove();

console.log(advertising);
//порядок глав 
const orderChapter = document.getElementsByTagName('li');
//во второй
orderChapter[9].after(orderChapter[8]);
orderChapter[10].after(orderChapter[9]);
orderChapter[11].after(orderChapter[10]);
orderChapter[12].after(orderChapter[11]);
orderChapter[13].after(orderChapter[12]);
orderChapter[14].after(orderChapter[13]);
orderChapter[13].after(orderChapter[12]);
orderChapter[11].after(orderChapter[10]);
orderChapter[12].after(orderChapter[11]);
orderChapter[10].after(orderChapter[9]);
orderChapter[10].before(orderChapter[11]);
orderChapter[14].before(orderChapter[15]);

// и пятой книге
orderChapter[39].after(orderChapter[38]);
orderChapter[40].after(orderChapter[39]);
orderChapter[44].before(orderChapter[45]);
orderChapter[41].before(orderChapter[42]);
orderChapter[42].before(orderChapter[43]);
orderChapter[43].before(orderChapter[44]);
orderChapter[42].before(orderChapter[43]);
orderChapter[41].before(orderChapter[42]);
orderChapter[40].before(orderChapter[41]);
orderChapter[39].before(orderChapter[40]);
orderChapter[38].before(orderChapter[39]);

console.log(orderChapter);

//в шестой книге добавить главу “Глава 8...
const listChapter = document.getElementsByTagName('li')[55];
const newChapt = document.createElement('li');
newChapt.textContent = 'Глава 8: За пределами ES6';
listChapter.after(newChapt);
//console.log(listChapter);
console.log(newChapt);


