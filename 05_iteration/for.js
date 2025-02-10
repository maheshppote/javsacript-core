for (let i = 0; i < 10; i++) {
  const element = `Value of i is: ${i}`;
  //   console.log(element);
}

// nested loop
for (let i = 1; i <= 10; i++) {
  // outer loop
  //   console.log(`Value of i is: ${i}`);

  //   console.log("---------------------");
  for (let j = 1; j <= 10; j++) {
    // inner loop
    // console.log(`Table 1 to 10 is: ${i * j}`);
  }
}

// Lets talk about break and continue;

for (let i = 1; i <= 20; i++) {
  if (i == 15) {
    // console.log(`The value of ${i} is detected.`);
    break;
  }
  //   console.log(`${i} is safe`);
}

for (let i = 1; i <= 20; i++) {
  if (i == 15) {
    console.log(
      `The value of ${i} is detected. however go ahead due to getting permission from js engine`,
    );
    continue;
  }
  console.log(`${i} is safe`);
}
