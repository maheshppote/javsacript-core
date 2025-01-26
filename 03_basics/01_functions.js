// ex1
function getDetails() {
  console.log("hello world");
  console.log("hello world");
  console.log("hello world");
  console.log("hello world");
  console.log("hello world");
}
// console.log(getDetails());

// ex2.

function addition(num1, num2){
    let result = num1 + num2;
    return result;
//    console.log(num1 + num2)
}
let result = addition(2,12)
// console.log("Result: ", result)

// ex3. userLogin

function userLogin(userName = "Lalit"){
    // if(userName === undefined){
    //     console.log("Please enter a userName.")
    //     return
    // }

    if(!userName){
        console.log("Please enter a userName.")
        ret
    }
    // console.log(`${userName} is Logged in.`)

    return `${userName} is logged in.`
}

let result2 = userLogin("Mahesh")
console.log(result2)


