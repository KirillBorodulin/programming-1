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





const circle22 = document.getElementById('circle22');
const block = document.getElementById('block');
const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    let position = 0;
    const maxPosition = block.clientHeight - circle22.clientHeight;

    function animate() {
      if (position < maxPosition) {
        position += 3;
        circle22.style.bottom = position + 'px';
        circle22.animationFrameId = requestAnimationFrame(animate);
      }
    }

    animate();
  });