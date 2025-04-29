const h1 = document.querySelector(".test-text");
console.log(h1.innerHTML);
h1.innerHTML = "Привет, мир! Меня зовут <i>Бородулин Кирилл</i>";


const email = document.getElementById("email");
email.value ='mail@mail.ru';
email.setAttribute("disabled",'true');


const remember = document.getElementById("remember");
remember.checked = true;

const btn = document.getElementById("btn");
btn.innerHTML = "Войти";


const firstLink = document.querySelector(".bb");
console.log(firstLink.getAttribute("href"));
firstLink.setAttribute("href","https://midis.ru/");
firstLink.setAttribute("target","_blank");




const btn1 = document.getElementById("btn1");
const circle = document.querySelector(".circle");
btn1.addEventListener("click",function(){
    circle.style.background = "red";
})