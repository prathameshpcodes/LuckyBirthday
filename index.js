const dateofbirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const checkInput = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputBox.innerText = "Your Birthday is lucky 🚀";
  } else {
    outputBox.innerText = `Your Birthday is not lucky 😢`;
  }
}

function checkBirthDateIsLucky() {
  let dob = dateofbirth.value;
  let sum = calculateSum(dob);
  if (sum && dob) compareValues(sum, luckyNumber.value);
  else outputBox.innerText = `Enter both the fields 👿`;
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}

checkInput.addEventListener("click", checkBirthDateIsLucky);
