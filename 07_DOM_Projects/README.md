# Project related to DOM

## project link

[click here](https://stackblitzstartersipqxjobr-ncpf--8080--d20a0a75.local-credentialless.webcontainer.io/)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    // console.log(e);
    if (e.target.id == "gray") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## project 2

## project link

[click here](https://stackblitzstartersyjayu7tr-j2kk-b6av7aqn--8080--d20a0a75.local-credentialless.webcontainer.io/)

# Solution code

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bmi-form");
  const results = document.getElementById("results");

  const calculateBMI = (weight, height) => {
    return (weight / ((height * height) / 10000)).toFixed(1);
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5)
      return { category: "Underweight", class: "result-underweight" };
    if (bmi >= 18.5 && bmi < 25)
      return { category: "Normal weight", class: "result-normal" };
    return { category: "Overweight", class: "result-overweight" };
  };

  const displayResult = (bmi, category) => {
    // First remove the old result with a fade out effect
    if (results.children.length > 0) {
      results.children[0].style.opacity = "0";
      results.children[0].style.transform = "scale(0.8)";

      setTimeout(() => {
        results.innerHTML = `
                    <div class="${category.class}">
                        <h3>Your BMI is: ${bmi}</h3>
                        <p>Category: ${category.category}</p>
                    </div>
                `;
      }, 300);
    } else {
      results.innerHTML = `
                <div class="${category.class}">
                    <h3>Your BMI is: ${bmi}</h3>
                    <p>Category: ${category.category}</p>
                </div>
            `;
    }
  };

  // Add input animations
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.style.transform = "translateX(10px)";
    });

    input.addEventListener("blur", () => {
      input.parentElement.style.transform = "translateX(0)";
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
      results.innerHTML =
        '<div class="result-underweight">Please enter valid height and weight values</div>';
      return;
    }

    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi);
    displayResult(bmi, category);
  });
});
```

## project 3

## project Link

[click here](https://stackblitzstartersyiynenbl-2fnf--8080--d20a0a75.local-credentialless.webcontainer.io/)

```javascript
const clock = document.getElementById("clock");

function updateClock() {
  const date = new Date();
  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  clock.innerHTML = time;
}

// Update immediately
updateClock();

// Then update every second
setInterval(updateClock, 1000);
```

## project 4

## project Link

[click here](https://stackblitzstarters8d3kti8j-253y--8080--d20a0a75.local-credentialless.webcontainer.io/)

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#sub-button");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".loworhigh");
const startOver = document.querySelector(".result");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("PLease enter a valid number");
  } else if (guess < 1) {
    alert("PLease enter a number more than 1");
  } else if (guess > 100) {
    alert("PLease enter a  number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  const badge = document.createElement("span");
  badge.classList.add("guess-badge");
  badge.textContent = guess;

  // Add different colors based on how close the guess is
  const difference = Math.abs(randomNumber - guess);
  if (difference <= 5) {
    badge.classList.add("very-close");
  } else if (difference <= 10) {
    badge.classList.add("close");
  } else if (difference <= 20) {
    badge.classList.add("far");
  } else {
    badge.classList.add("very-far");
  }

  guessSlot.appendChild(badge);
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
```
