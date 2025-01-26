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

function addition(num1, num2) {
  let result = num1 + num2;
  return result;
  //    console.log(num1 + num2)
}
let result = addition(2, 12);
// console.log("Result: ", result)

// ex3. userLogin

function userLogin(userName = "Lalit") {
  // if(userName === undefined){
  //     console.log("Please enter a userName.")
  //     return
  // }

  if (!userName) {
    console.log("Please enter a userName.");
    ret;
  }
  // console.log(`${userName} is Logged in.`)

  return `${userName} is logged in.`;
}

let result2 = userLogin("Mahesh");
// console.log(result2);

// Ex4 - rest operator

function calculateCartPrice(...price) {
  let result = price;

  return result;
}

let result3 = calculateCartPrice(200, 300, 400);
// console.log("Result3:", result3);


function calculateCartPrice2(p1, p2, ...price) {
    let result = price;
  
    return result;
  }
  
  let result4 = calculateCartPrice2(200, 300, 400, 500);
//   console.log("Result3:", result4);

  // Ex5. handle object

  let obj1 = {
    name: "Mahesh",
    price: 337
  }

  function getObjDetails(objectval){
    console.log(`${objectval.name} received ${objectval.price} amount`)
  }

//   getObjDetails(obj1)

getObjDetails({
    name : "hitesh",
    price: 3000
})

// EX 5 Array

const amountofArr = [200, 400, 900]

function getArrAmount(arrparams){
    console.log(arrparams[1])
}

// getArrAmount(amountofArr)
getArrAmount([200,900,100])