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

let multiply = 2;
function multiplyAdd() {
  multiply += 1
  console.log(multiply);
  document.getElementById("multiplyBy").innerHTML="<em>mal</em> "+multiply
}
function multiplySubstract() {
  multiply -= 1;
  console.log(multiply);
  document.getElementById("multiplyBy").innerHTML="<em>mal</em> "+multiply
}

function multiplyByX() {
  number.value = number.value * multiply;
  console.log(number.value);
  document.getElementById("showNumber").innerHTML = number.value;
}
// document.getElementById("showNumber").innerHTML = newNumber.value;
function reset() {
  number.value = "";
  document.getElementById("showNumber").innerHTML="";
  document.getElementById("multiplyBy").innerHTML="<em>mal</em> "+2
}