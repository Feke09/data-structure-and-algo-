function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const year = parseInt(prompt("Enter a year: "));
if (isLeapYear(year)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}

function ticketPrice(age) {
  if (age <= 12) {
    return 10;
  } else if (age >= 13 && age <= 17) {
    return 15;
  } else {
    return 20;
  }
}

const age = parseInt(prompt("Enter your age: "));
const price = ticketPrice(age);
console.log(`The price of the ticket is: $${price}`);

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const n = parseInt(prompt("Enter the position in Fibonacci sequence: "));
console.log(`The ${n}th Fibonacci number is: ${fibonacci(n)}`);

function isPalindrome(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  function checkPalindrome(substring) {
    if (substring.length <= 1) return true;
    if (substring[0] !== substring[substring.length - 1]) return false;
    return checkPalindrome(substring.slice(1, -1));
  }

  return checkPalindrome(cleaned);
}

const inputString = prompt("Enter a string: ");
if (isPalindrome(inputString)) {
  console.log(`"${inputString}" is a palindrome.`);
} else {
  console.log(`"${inputString}" is not a palindrome.`);
}
