// JavaScript pour la fonctionnalité CRUD
document.getElementById("add-button").addEventListener("click", function() {
    var input = document.getElementById("todo-input");
    var todoList = document.getElementById("todo-list");
    let inc = 1

    if (input.value !== "") {
        var listItem = document.createElement("li");
        listItem.className = "todo-item";
        listItem.innerHTML = '<input type="checkbox">' + '<label>' + input.value + '</label>' + '<button class="delete">Supprimer</button>';
        todoList.appendChild(listItem);
        input.value = "";
    }
});

document.getElementById("todo-list").addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }});

document.getElementById("task_done").addEventListener("click", function(event){
    if (event.target.tagName === "checkbox") {
        document.getElementsByTagName("label").style.textDecoration = "strikethrough"
    };
    
});