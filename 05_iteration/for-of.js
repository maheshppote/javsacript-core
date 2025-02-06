let arr = [1, 2, 3, 4, 5];

for (const element of arr) {
  //   console.log(`${element} fetch from the for of loop `);
}

// string

let str = "Mahesh pote";

for (const element of str) {
  //   console.log(element);
}

let map = new Map();
map.set("bh", "bhutan");
map.set("bh", "bhutan");
map.set("IN", "India");
map.set("Aus", "Australia");
map.set("Dhaka", "Srilanka");
map.set("Dhaka", "Srilanka"); // It ignore duplicate value.a and print ascending order always. order will not change.

for (const [key, value] of map) {
  console.log(`${key} :- ${value}`);
}
