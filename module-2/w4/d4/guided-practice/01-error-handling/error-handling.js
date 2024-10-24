// 1.
function sum(array) {

  let sum = 0;
  try {

    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }


  // console.log('sum', sum);
  // return sum;
  } catch(e) {
    if(e instanceof TypeError) {
      console.log(e.message);
      return 'thats nan';
    } else {
      throw e;
    }
  }

  return sum;
}

let res = sum(null);
// console.log(res);

// 2.


function sayName(name) {
  if(typeof name !== 'string') {
    throw new TypeError(`Invalid name! Must be a string!`);
  }
  console.log(name);
};

// tests
try {
  sayName(1);
  sayName("Alex");
} catch(e) {
  console.log(e.message);
}

// Your code here

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}


try {
  greet('hello');
  greet();
} catch(e) {
  console.log('hello world');
}
