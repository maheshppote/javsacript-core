const user = {
    userName : "Mahesh",
    price : 999,
    welcomeMessage : function(){
        console.log(`hello ${this.userName}`)
       // return `hello ${this.userName}`
    }
}

// console.log(user.welcomeMessage())

// use this in normal func

function getDetails(){
    console.log(this)
}

// console.log(getDetails())

function getDetails2(){
    let userName = "Mahesh"
    console.log(this.userName)
}

// console.log(getDetails2())

const chai = () => {
    let userName = "Mahesh"
    console.log(this.mahesh)
}

// console.log(chai())

// more arrow fn examples

const add = (n1, n2) => {
    return n1 + n2
}

const add2 = (n1, n2) => (n1 + n2)

const add3obj = (n1, n2) => ({name : "Mpote"})

console.log(add(2, 9))
console.log(add2(13,2))
console.log(add3obj())

const d1 = add3obj();
console.log("get the value from obj: ", d1.name)

console.log("----------------")


