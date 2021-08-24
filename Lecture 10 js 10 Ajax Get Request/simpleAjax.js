//Simpified Ajax call complete code 
$(function(){
    $("#load").click(function(){
    $.get("student.txt",function (response){
        $("#result").empty();
        $("#result").append(response);
    });
    });
});

