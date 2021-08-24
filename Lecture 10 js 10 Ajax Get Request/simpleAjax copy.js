console.log("Code Starting")
$(function(){
    console.log("Doing Bindings"); 
    $("#load").click(sendAjax);
});
function sendAjax(){
    console.log("Sending Ajax Request");
    //send request here
    console.log("Request Sent");
    $.get("student.txt",handleResponse);
}
function handleResponse(response){
    console.log("Response Recieved");
    console.log(response);
    $("#result").empty();
    $("#result").append(response);
}
console.log("Code finished");