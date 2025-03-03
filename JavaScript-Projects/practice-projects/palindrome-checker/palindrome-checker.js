 const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");
const ulElement = document.getElementById("list-of-text");

ulElement.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    const clickedItem = event.target;
    textInput.value = clickedItem.textContent;
  }
});



checkBtn.addEventListener("click", () => {
  const inputVal = textInput.value;
  if (inputVal === "") {
    alert("Please input a value")
  }
  result.innerText = showResult(inputVal);
})

function reverseString(string) {
  let stringReversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    stringReversed += string[i];
  }
  return stringReversed;
}

function cleanString(string) {
  let cleanedString = "";
  const regex = /\w/;
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(regex)) {
      cleanedString += string[i];
    } else {
      cleanedString += "";
    }
  }
  return cleanedString.replace("_", "").toLowerCase();
}

function showResult(input) {
  const cleanedString = cleanString(input);
  const completedString = reverseString(cleanString(input));
  let resultText = "";
  if (completedString === cleanedString) {
    resultText = `${input} is a palindrome`;
  } else {
    resultText = `${input} is not a palindrome`;
  }
  return resultText;
}
