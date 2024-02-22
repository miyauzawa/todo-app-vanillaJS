 // DOM OBJECTS
 const todoList = document.getElementById("todo-list");
 const form = document.querySelector("form");
 const input = document.querySelector("[name='todo-item']");

 // LIFE CYCLE
 let existingTodos = JSON.parse(localStorage.getItem("todo-items"));
 let todoData = existingTodos || [];
 
 todoData.forEach((todo)=>{
     renderTodo(todo);
 });

 function addTodo(todoText){
     todoData.push(todoText);
     localStorage.setItem("todo-items", JSON.stringify(todoData));
 }

 function renderTodo(todoText){
     const li = document.createElement("li");
     li.innerHTML = todoText;
     todoList.appendChild(li);
 }

 

 // EVENT
 form.onsubmit = (event) =>{
     event.preventDefault();

     addTodo(input.value);
     renderTodo(input.value);

     input.value = '';
 }