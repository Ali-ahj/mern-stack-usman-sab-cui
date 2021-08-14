console.log("Starting");
// function handleAddNewTodo(){
//     console.log("Handling at New todo Button")
// }
// function doBindings(){
//     console.log("Bindings");
//     var btn = document.getElementById('btnAdd');
//     btn.onclick = handleAddNewTodo;
// }
// window.onload = doBindings;    
// console.log("Finished");

//The above code can be written in simpler form as follows

window.onload = function(){
    var btn = document.getElementById("btnAdd");
    btn.onclick = handleAdd;
}

//Lecture 8

function handleAdd(){
   var newTodo = document.getElementById("newToDo").value;
   var unOrderedList = document.getElementById("todos");
   var todo = document.createTextNode(newTodo);
   var newLi = document.createElement("li");
   newLi.appendChild(todo);
   unOrderedList.appendChild(newLi);
}
function handleDelete(e){
    var tag = e.target;
    var li = tag.parentNode;
    li.parentNode.removeChild(li);

}





/*
 var newTodo = document.getElementById("newToDo").value;
    var unOrderedList = document.getElementById('todos');
    var newText = document.createTextNode(newTodo);
    var newLi = document.createElement("li");
    newLi.appendChild(newText);
    unOrderedList.appendChild(newLi);
*/