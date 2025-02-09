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
