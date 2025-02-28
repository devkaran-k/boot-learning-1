const clock = document.getElementById("clock");

setInterval(function () {
    const date = new Date();

    let hours = date.getHours() % 12 || 12;
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let ampm; 
    
    if (date.getHours() >= 12) {
        ampm ="PM";
    } else {
        ampm = "AM";
    }

    console.log(ampm);
    
    clock.children[0].textContent = `${hours} :`
    clock.children[1].textContent = `${minute} :`
    clock.children[2].textContent = `${second} :`
    clock.children[3].textContent = `${ampm} :`
    // console.log(clock.children[0]);
    
    
}, 1000)