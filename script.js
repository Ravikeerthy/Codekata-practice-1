// function reverseString(str){
//     let mainStr = str.split('').reverse((acc,ele)=> ele + acc).join('');
//     console.log(mainStr);
// }

// reverseString("jenifer");

// Temp comment

var x = "jenifer";

function string(x) {
  var reverseStr = x
    .split("")
    .reverse((acc, ele) => ele + acc)
    .join("");
  // console.log(reverseStr);
}
string(x);

// You are given an array. Your task is to sort the array in given manner. Print the elements in increasing order of the frequency. If frequency is same print smaller one first.

// Sample Input :
// 4
// 1 1 3 2
// Sample Output :
// 2 3 1

// A single line contains an integer N.

function looping(num) {
  for (let i = 1; i <= num; i++) {
    // console.log(i);
  }
}
looping(5);

// Given 2 numbers N and K followed by elements of N .Print 'yes' if K exists else print 'no'.

function exists(input) {
  let val = input.trim().split("/n");

  let [N, K] = val[0].split(" ").map(Number);

  let ele = val[1].split(" ").map(Number);

  if (ele.includes(K)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

const input = `"4 2
1 2 3 3"`;

exists(input);

// it is to test git push and pull
