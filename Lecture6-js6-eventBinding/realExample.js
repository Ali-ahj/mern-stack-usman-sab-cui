function update(){
    console.log("Updating results");
    var input = document.getElementById('myinput');
        console.log(input.value);

    var output = document.getElementById('output');
    output.innerHTML = input.value;
    console.log(output.value);
}