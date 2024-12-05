let sum = 1;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}

console.log(sum);

let arr = [1, 2, 3, 4, 5];
let largest = arr[0];

for (let index = 1; index <= arr.length; index++) {
  if (arr[index] > largest) {
    largest = arr[index];
  }
}

console.log(largest);

for (let index = 1; index <= 10; index++) {
  for (let j = 5; j <= 5; j++) {
    let result = index * j;

    console.log(result);
  }
}

let str = "carrace";
let str2 = [];

for (let i = 6; i <= str.length; i--) {
  let result = str.push();
  console.log(result);
}
