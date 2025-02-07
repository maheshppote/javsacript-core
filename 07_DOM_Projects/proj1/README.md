# Project related to DOM

## project link 
[click here](https://stackblitzstartersipqxjobr-ncpf-1rlhavhz--8080--d20a0a75.local-credentialless.webcontainer.io/)
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
