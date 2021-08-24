console.log("This is task 1 by Sir Asif Shehzad sab");


function add() {
  var name = $("#name").val();
  var gender = $("input[type='radio'][name='gender']:checked").val();
  var age = $("#age").val();
  var city =$('#city :selected').text();
  var row ="<tr><td>"+name+"</td><td>" 
            +gender +"</td><td>" 
            +age +"</td><td>"
            +city+"</td></tr>";
    $("table").append("<tr><td>"+name+"</td><td>" 
    +gender +"</td><td>" 
    +age +"</td><td>"
    +city+"</td></tr>");

}

$(function () {
  $("#add").click(add);
});


window.onload = function add(){
  var table = document.getElementById("tbl");
  
}

// function myFunction(){
//   var tbl = document.getElementById("tbl");
//   var row = tbl.insertRow();
//   var cell1 = row.insertCell();
//   var cell2 = row.insertCell();
//   var cell3 = row.insertCell();
//   var cell4 = row.insertCell();
  
//   cell1.innerHtml = "Ali";
//   cell1.innerHtm2 ="Male";
//   cell1.innerHtm3 = "23";
//   cell1.innerHtm4 ="lahore";
  
// }