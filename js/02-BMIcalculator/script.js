const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const result = document.getElementById("results");
  const range = document.querySelectorAll(".range");

  
    // Remove only previous <mark> (but keep text)
  range.forEach((el) => {
    el.innerHTML = el.textContent; 
  });


  if (height < 0 || height === "" || isNaN(height)) {
    result.innerHTML =
      "Please Enter Valid Height Value";
      console.log( document.getElementById("height"));
      
  }
  else if (weight < 0 || weight === "" || isNaN(weight)) {
    result.innerHTML =
      "Please Enter Valid Weight Value";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    if(bmi < 18.6){
        range[0].innerHTML = `<mark>${range[0].textContent}</mark>`;
    }
    else if(bmi >= 18.6 && bmi <= 24.9){
        range[1].innerHTML = `<mark>${range[1].textContent}</mark>`;
    }
    else{
        range[2].innerHTML = `<mark>${range[2].textContent}</mark>`;
    }

   
  }
});
