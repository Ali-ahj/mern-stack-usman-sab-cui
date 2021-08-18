                         // Lect 6

// function btnClicked(){
//     console.log("This button Clicked");
// }

// function update(){
//     console.log("Updating Result");
//     var input = document.getElementById("myInput");
//     // console.log(input.value);
//     var output = document.getElementById("output");
//     output.innerHTML = input.value;
    
// } 


                        //Lec7
// console.log("Starting");
// function addNewTodo(){
//     console.log("Handling Add New todo Button");
// }
//  function doBindings(){
//      console.log("Bindings");
//     //  console.log("Handling Bindings");
//      var btn = document.getElementById("btnAdd");
//      btn.onclick = addNewTodo;
//  }
//  window.onload = doBindings;
//  console.log("Finished");


                        //Lec8

    // window.onload = function(){
    //     var btn = document.getElementById("btnAdd");
    //     btn.onclick = handleAdd;
    // }
    // function handleAdd (){
    //     var input = document.getElementById('newTodo').value;
        
    //     var ul = document.getElementById('todos');
    //     var inputText = document.createTextNode(input);  
    //     var newElem  = document.createElement("li");
    //     newElem.appendChild(inputText);
    //     ul.appendChild(newElem);



        //Creating a delete Button along with new input
        // var createButton = document.createElement("button");
        // createButton.innerHTML = "Delete";
        // var button = document.createTextNode(createButton);
        // createButton.appendChild(newElem);
   // }

    // function handleDelete(e){
    //     var tag = e.target;
    //     var parentOfTag = tag.parentNode;
    //     parentOfTag.parentNode.removeChild(parentOfTag);
    // }


                                //Lec9

$(function(){
    $("#addButton").click(handleBtnClick);
    $("#todos").on("click","li",removeMe);
});

function handleBtnClick(){
    // if($("#newTodo").val(" ")){
    //     $("#newTodo").val(" "); 
    // }
    var newTodo = $("#newTodo").val();
       if(newTodo ==' '){
           console.log("Empty");
           $("#newTodo").addClass("error"); 
           return;        
       }
                      
        $("#newTodo").removeClass("error"); 
        $("#newTodo").val(" ");
        $("#todos").append("<li>"+ newTodo + "</li>");
        // $("#todos li").click(removeMe);
}

function removeMe(){
    $(this).remove();
}

    
    

