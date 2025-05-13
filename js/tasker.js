const btnCreateTask = document.getElementById("btn-create-task");
const textTask = document.getElementById("text-task");
const container = document.querySelector(".container");

let tasks = document.querySelectorAll(".task");

console.log(tasks);//коллекция статична

/*Добавление новой задачи */
btnCreateTask.addEventListener("click", function(event){
    event.preventDefault();//отменяем действие браузера по умолчанию это перезагрузка страницы
    //console.log("click");
    let text = textTask.value;

    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `<span>${text}</span>
    <i tabindex="0" class="bi bi-pencil-fill btn-edit"></i>
    <i tabindex="0" class="bi bi-trash3 btn-remove"></i>`;
    container.append(newTask);
    

    tasks = document.querySelectorAll(".task");
    console.log(tasks);
});
/*-------------------------удаление и редактирование-------------------------- */
// let btnsRemove = document.querySelectorAll(".btn-remove");
// for (let btn of btnsRemove){
//     btn.addEventListener("click" , ()=>{
//         console.log("remove");
//     });
// }
container.addEventListener("click",(event)=> {
    const btn = event.target;//элемент по которому кликнул пользователь
    if(btn.classList.contains("btn-remove")){//если это кнопка удалени то --- 
        btn.closest(".task").outerHTML="";
        console.log("удаляем");
    }
    if(btn.classList.contains("btn-edit")){//если это кнопка редактирование то --- 
        btn.closest(".task").querySelector("span").setAttribute("contenteditable","true");
        console.log("редактируем");
    }
    tasks = document.querySelectorAll(".task");
});

/*--------------------------------------------------*/
const btn = document.getElementById("btn");
btn.addEventListener("click" , function(){
    let tasks = document.querySelectorAll(".task");
    NodeList
    //tasks = [...tasks];
    for(let task of tasks){
        // if(task.classList.contains("important")){
        //     task.classList.remove("important")
        // }
        // else{
        //     task.classList.add("important")
        // }
        task.classList.toggle("important");
    }
})
/*----------------------btn1----------------------------*/
const btn1 = document.getElementById("btn1");
function compare(a,b){
    if(a.querySelector("span").innerHTML > b.querySelector("span").innerHTML) return 1;
    if(a.querySelector("span").innerHTML == b.querySelector("span").innerHTML) return 0;
    if(a.querySelector("span").innerHTML < b.querySelector("span").innerHTML) return -1;  
}
btn1.addEventListener("click" , function(){
    let newTasks = [...tasks].sort(compare);
    container.innerHTML = " " ;
    for(let i in newTasks){
        container.append(newTasks[i])
    }    
})
/*----------------------btn2----------------------------*/
const btn2 = document.getElementById("btn2");
function compareReverse(a,b){
    if(a.querySelector("span").innerHTML < b.querySelector("span").innerHTML) return 1;
    if(a.querySelector("span").innerHTML == b.querySelector("span").innerHTML) return 0;
    if(a.querySelector("span").innerHTML > b.querySelector("span").innerHTML) return -1;  
}
btn2.addEventListener("click" , function(){
    let newTasks = [...tasks].sort(compareReverse);
    container.innerHTML = " " ;
    for(let i in newTasks){
        container.append(newTasks[i])
    }    
})
/*----------------------btn3----------------------------*/
const btn3 = document.getElementById("btn3");
btn3.addEventListener("click" , function(){
    let newTasks = [...tasks];
    console.log(newTasks)
    newTasks = newTasks.filter(function(tsk){
        return tsk.classList.contains("important");
    });
    container.innerHTML = "";
    for(let i in newTasks){
        container.append(newTasks[i])
    }  
       
})
/*----------------------btn4----------------------------*/
const btn4 = document.getElementById("btn4");
const text1 = document.getElementById("text1");
btn4.addEventListener("click", function(){
    let value = text1.value;
    let newTasks = [...tasks];
    newTasks = newTasks.filter(function(item){
        return item.innerHTML.indexOf(value) != -1;
    });
    container.innerHTML = "";
    for(let i in newTasks){
        container.append(newTasks[i])
    } 
})
/*----------------------btn5----------------------------*/
const btn5 = document.getElementById("btn5");
btn5.addEventListener("click", function(){
    let newTasks = [...tasks];
    container.innerHTML = "";
    for(let i in newTasks){
        container.append(newTasks[i])
    } 
})

// function myMax(x,y){
//     console.log(arguments);
//     let max = x;
//     if ( y > max){
//         max = y;
//     }
//     return max;
// }
// console.log(myMax(4,15));


// function myMax(arguments){
//     console.log(arguments);
//     let max = arguments[0];
//     if ( arguments[1] > max ){
//         max = arguments[1];
//     }
//     return max;
// }
// console.log(myMax(4,-1));


// function myMax(arguments){
//     console.log(arguments);
//     let max = arguments[0] || 0;
//     for (let i=1; i < arguments.lenght; i++){
//         if ( arguments[i] > max ){
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// console.log(myMax(4,-1));

/*---------------------------Пример всплытия и погружения------------------------- */
// const tags = document.querySelectorAll("*");
// let i = 0;
// for (let tag of tags){
//     tag.addEventListener("click",(event)=>{ 
//         i++;
//         console.log("этап "+ i);
//         console.log("целевой элемент ")
//         console.log(event.target);
//         console.log("элемент, который поймал событие");
//         console.log(event.currentTarget);
//     });
// }
