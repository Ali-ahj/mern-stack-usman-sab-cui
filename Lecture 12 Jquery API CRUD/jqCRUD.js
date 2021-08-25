
// // $(function () {
// //   loadRecipies();
// // });
// // function loadRecipies() {
// //   $.ajax({
// //     url: "https://usman-recipes.herokuapp.com/api/recipes",
// //     method: "GET",
// //     success: function (response) {
// //       console.log(response);
// //       var recipies = $("#recipies");
// //       recipies.empty();
// //       for (var i = 0; i < response.length; i++) {
// //         var rec = response[i];
// //         recipies.append(
// //           `<div class ="recipie"><h3>"${rec.title}</h3><p><button class="btn btn-danger float-right">Delete</button>${rec.body}</p></div>`
// //         );
// //         // recipies.append("<div><h3>"+rec.title +"</h3></div>")
// //       }
// //     },
// //   });
// // }

$(function(){
    loadRecipies();
})
function loadRecipies(){
    $.ajax({
        url : "https://usman-recipes.herokuapp.com/api/recipes",
        method : "GET",
        success : function(response){
        console.log(response);
        var recipies = $("#recipies")
        recipies.empty();
        for(var i =0 ; i<response.length;i++){
            var rec = response[i];
            recipies.append(
                `<div class = "recipie"><h3>${rec.title}</h3><p><button class = "btn btn-danger btn-sm float-right">Delete</button>${rec.body}</p></div>`);
            // recipies.append("<div><h3>"+rec.title+"</h3></div>");
        }
     
        }
    });
}

// $(function(){
//     loadRecipies();
// })
// function loadRecipies(){
//     $.ajax({
//         url : "https://usman-recipes.herokuapp.com/api/recipes",
//         method : "GET",
//         success:function (response){
//         console.log(response);
//         var recipies =  $("#recipies");
//         recipies.empty()
//         for(var i=0 ;i<response.length;i++){
//             var rec = response[i];
//             recipies.append(
//                 `<div class = "recipie"><h3>${rec.title}</h3><p><button class = "btn btn-danger btn-sm float-right">Delete</button>${rec.body}</p></div>`);
//         //  `<div class = "recipie"><h3>${rec.title}</h3><p><button class = "btn btn-danger btn-sm float-right">Delete</button>${rec.body}</p></div>`)
//         }
//         }
       
//     });
// }























