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
    //do all bindings here
    var btn = document.getElementById("btnAdd");
    btn.onclick = function(){
        console.log("Handling Add New todo button");
    }
}