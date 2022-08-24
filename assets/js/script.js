let number = document.getElementById("input__number");

// number = 0;


function getNumber() {
  console.log(number.value);
}

function multiplyByTwo() {
  number.value = number.value * 2;
  console.log(number.value);
  document.getElementById("showNumber").innerHTML = number.value;
}


// document.getElementById("showNumber").innerHTML = newNumber.value;
