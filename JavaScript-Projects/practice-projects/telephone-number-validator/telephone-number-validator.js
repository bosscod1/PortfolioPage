 document.addEventListener("DOMContentLoaded", () => {
  const userInput = document.getElementById("user-input");
  const checkBtn = document.getElementById("check-btn");
  const clearBtn = document.getElementById("clear-btn");
  const resultsDiv = document.getElementById("results-div"); // Updated to save all results

  // Regular expression for valid US phone numbers
  const validPhoneNumberRegex = /^1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;

  // Function to validate phone numbers
  const validatePhoneNumber = (phoneNumber) => {
    return validPhoneNumberRegex.test(phoneNumber);
  };

  // Function to check the phone number
  const checkPhoneNumber = () => {
    const input = userInput.value.trim();

    if (!input) {
      alert("Please provide a phone number");
      return;
    }

    // Create a new result entry
    const resultEntry = document.createElement("p");
    if (validatePhoneNumber(input)) {
      resultEntry.textContent = `Valid US number: ${input}`;
      resultEntry.style.color = "green"; // Optional: Add styling for valid results
    } else {
      resultEntry.textContent = `Invalid US number: ${input}`;
      resultEntry.style.color = "red"; // Optional: Add styling for invalid results
    }

    // Append the result to the results-div
    resultsDiv.appendChild(resultEntry);
  };

  // Event listener for the Check button
  checkBtn.addEventListener("click", checkPhoneNumber);

  // Event listener for the Enter key
  userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      checkPhoneNumber(); // Trigger the same logic as the Check button
    }
  });

  // Event listener for the Clear button
  clearBtn.addEventListener("click", () => {
    userInput.value = ""; // Clear the input field
    resultsDiv.innerHTML = ""; // Clear all results
  });
});
