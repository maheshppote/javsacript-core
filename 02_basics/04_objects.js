// singltone obj

// const obj1 = new Object({1:"A",2:"B"})
// console.log(typeof obj1);

let employeeDetails = {};

employeeDetails.name = "Mahesh";
employeeDetails.email = "mpote97@gmail.com";
employeeDetails.mob = 7020203223;

// console.log(employeeDetails);

let obj2 = {
  firstName: "Mahesh",
  fullName: "Mahesh Pote",
  Car: {
    color: "red",
    model: "h1b1",
    company: {
      name: "tata",
      location: "pune",
    },
  },
};

// console.log(obj2);

// console.log(obj2.Car.company.location)

const userDetails = {
    name : "Mahesh",
    email : "mpote97@gmail.com",
    age: 35
}

const compdetails = {
    cname : "Synechron",
    location : "pune",
    account : "APAC"
}

const EmpFullDetails = {...userDetails, ...compdetails}
console.log(EmpFullDetails)

console.log(Object.keys(EmpFullDetails));

console.log(Object.values(EmpFullDetails))