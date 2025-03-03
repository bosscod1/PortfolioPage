 const input = document.getElementById("number");
const convert = document.getElementById("convert-btn");
const output = document.getElementById("output");

convert.addEventListener("click", () => {
  const value = input.value
  if (value === "") {
    output.innerText = "Please enter a valid number";
  } else if (value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    output.innerText = arabicToRoman(value);
  }
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const value = input.value
  if (value === "") {
    output.innerText = "Please enter a valid number";
  } else if (value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    output.innerText = arabicToRoman(value);
  }
  }
})

function arabicToRoman(number) {
  const romanNumerals = [
    {value: 1000, symbol: "M"},
    {value: 900, symbol: "CM"},
    {value: 500, symbol: "D"},
    {value: 400, symbol: "CD"},
    {value: 100, symbol: "C"},
    {value: 90, symbol: "XC"},
    {value: 50, symbol: "L"},
    {value: 40, symbol: "XL"},
    {value: 10, symbol: "X"},
    {value: 9, symbol: "IX"},
    {value: 5, symbol: "V"},
    {value: 4, symbol: "IV"},
    {value: 1, symbol: "I"}
  ];
  let result = "";

  for (const{value, symbol} of romanNumerals) {
    while (number >= value) {
      result += symbol;
      number -= value;
    }
  }
  
  return result;
}