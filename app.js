var message = 'Hello Node!';

var sum = 5 + 3;

console.log(message);
console.log(sum);

var commandLineArgs = process.argv;
console.log(commandLineArgs);

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = (profileDataArr) => {
  console.log(profileDataArr);
};

printProfileData(profileDataArgs);

const printProfileData = profileDataArr => {
  console.log(profileDataArr);
};

const addNums = (numOne, numTwo) => numOne + numTwo;

const sum = addNums(5, 3); // sum would be 8

const addNums = (numOne, numTwo) => {
  console.log(numOne, numTwo);
  return numOne + numTwo;
};

// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }
};

console.log('================');

profileDataArr.forEach(profileItem => console.log(profileItem));
