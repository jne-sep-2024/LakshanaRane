//while

let count = 1;
while (count < 10) {
    console.log(count);
    count += 2;
}

//do while
let count1 = 0;
do {
    console.log(count1);
    count1++;
} while (count1 < 5);

//For loop

for (let i = 1; i < 5; i++) {
    console.log(i);
}


let j = 1;

for (; j <= 10; j += 2) {
    console.log(j);
}

for (let j = 1; ; j += 2) {
    console.log(j);
    if (j > 10) {
        break;
    }
}

let k = 1;
for (;;) {
  if (k > 10) {
    break;
  }
  console.log(k);
  k += 2;
}

let sum=0;
for(let i=0;i<=9;i++,sum+=i);
console.log(sum);   

//break
for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i == 2) {
      break;
    }
  }

  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i + j == 4) {
        break;
      }
      console.log(i, j);
    }
  }

  
//   /continue

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(i);
  }


