/* 1. Выбор элементов на странице */
/* 1.1 Выбор по id  */
const h1 = document.getElementById("title");
console.log(h1);
/* 1.2 Выбор одного элемента по селектору */
const menu = document.querySelector(".menu");
console.log(menu);
/* 1.3 выбор нескольких элементов по селектору */
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);


/* 2. Прочитать или именить содержимое тега */
console.log(h1.textContent);
console.log(h1.innerHTML);
console.log(h1.outerHTML);
console.log(h1.innerText);
console.log(h1.outerText);

h1.textContent = 'Новый заголовок <i class="bi bi-airplane-engines"></i>';//как текст вопринимает 
h1.innerHTML = 'Новый заголовок <i class="bi bi-airplane-engines"></i>';//как тег воспринимает

//очистить доску h1/innerHTML = "";


/* 3. Работа со стилями (атрибут style) */
h1.style.color = "Red";
h1.style.fontSize = "48px";
console.log(h1.style);

/* 4. Работа с классами (атрибут class) */
menu.classList.add("border"); //добавили класс

const h2 = document.querySelector(".blue");
h2.classList.remove("blue");//удалить класс

console.log(menu.classList.contains("border"));//проверить есть ли такой класс у элемента

/* 5. Работа с атрибутами  */
const firstLink = document.querySelector(".menu li:first-child a");
console.log(firstLink.getAttribute("href"));//узнать значение атрибутов type href style и др
firstLink.setAttribute("href","https://midis.ru/");//замена ссылки на новую  новый атрибут
firstLink.setAttribute("target","_blank");//открытие в соседней вкладочке
//firstLink.removeAttribute("target");  //удалить

/* 6. Создание нового тега */
const image = document.createElement("img");//создаю элемент
image.setAttribute("src","img/1.jpg");//добавляю атрибут
image.classList.add("border");//добавлю класс
const block = document.getElementById("block");//беру элемент в который добавлен новый элемент
block.classList.add("border");//добавляю новый элемент
block.append(image);//append prepend after before

/* 7. Работа с предками */
console.log(firstLink.closest("li"));
console.log(firstLink.closest("nav"));

/* 8. Работа с потомками (кто внутри элемента лежит) */
console.log(document.querySelectorAll("a"));
console.log(menu.querySelectorAll("a"));

/* 9. События */
const btn = document.getElementById("btn");
const circle = document.querySelector(".circle");
btn.addEventListener("click",function(){
    circle.style.background = "blue";
})



