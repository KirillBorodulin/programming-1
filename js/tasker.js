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
    newTask.innerHTML = `<span>${text}</span>`;
    container.append(newTask);
    

    tasks = document.querySelectorAll(".task");
    console.log(tasks);
})



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
    if(a.innerHTML > b.innerHTML) return 1;
    if(a.innerHTML == b.innerHTML) return 0;
    if(a.innerHTML < b.innerHTML) return -1;  
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
    if(a.innerHTML < b.innerHTML) return 1;
    if(a.innerHTML == b.innerHTML) return 0;
    if(a.innerHTML > b.innerHTML) return -1;  
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
    newTasks = ;
    container.innerHTML = " " ;
       
})