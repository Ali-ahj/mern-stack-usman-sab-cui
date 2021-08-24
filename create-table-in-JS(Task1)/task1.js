console.log("Work");
var row = 1;

$(function (){
    $("#add").click(add);
    $("#reset").click(reset);
    })

function add(){
var tbl = document.getElementById("tbl");
var newRow = tbl.insertRow(row);
var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);
var cell4 = newRow.insertCell(3);





                        //Simple Js Method......
// cell1.innerHTML = document.getElementById("name").value;
// document.getElementById("name").value= " ";
// cell2.innerHTML = document.getElementById("age").value;
// document.getElementById("age").value= " ";
// cell3.innerHTML =document.getElementById("city").value;
// document.getElementById("city").value= " ";
// console.log("Work is done");

                    //By using JQuery..............

var name = $("#name").val();
var age = $("#age").val();
var city = $("#city").val();
var del = $(function(){
   removeLink.val();
})



cell1.innerHTML = name;
cell2.innerHTML = age;
cell3.innerHTML = city;
cell4.innerHTML = del;

}


function reset(){
var name = $("#name").val(" ");
var age = $("#age").val(" ");
var city = $("#city").val(" ");
console.log("Work is done");
}

function removeLink(){
    var removeLink = document.createElement(a);
    removeLink.id = 'remove';
    removeLink.className = 'remove';
    var linkText = document.createTextNode("Remove");
    removeLink.appendChild(linkText);
    // cell4.appendChild(removeLink);
    }