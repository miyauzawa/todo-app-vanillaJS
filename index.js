// DOM elements
const form = document.querySelector("form");
const input = document.querySelector("[name='todo']");
const todoList = document.getElementById("todo-list");

// Life cycle
const exsistingTodos = JSON.parse(localStorage.getItem('todos'));

const todoData = exsistingTodos || [];
todoData.forEach(todo => {
    addTodo(todo);
});

function addTodo(todoText){
    todoData.push(todoText);
    const li = document.createElement("li");
    li.innerHTML = todoText;
    todoList.appendChild(li);
    localStorage.setItem('todos', JSON.stringify(todoData));
}

// Events
form.onsubmit = (event) =>{
    event.preventDefault();
    addTodo(input.value);
}