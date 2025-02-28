const buttons = document.querySelectorAll(".button")

buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        e.preventDefault();
        console.log(e);
        if(e.target.id == "grey"){
            console.log(e.target);
            document.body.style.backgroundColor = "grey";
        }
        if(e.target.id == "white"){
            console.log(e.target);
            document.body.style.backgroundColor = "white";
        }
        if(e.target.id == "blue"){
            console.log(e.target);
            document.body.style.backgroundColor = "blue";
        }
        if(e.target.id == "yellow"){
            console.log(e.target);
            document.body.style.backgroundColor = "yellow";
        }

    })
})
