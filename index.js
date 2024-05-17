const string = 'Hello world'
// comment
console.log(string)

alert(string)
setTimeout(() => location.href = "https://codeshack.io", 10000);
function capitalizeWords(str) {
  return str.replace(/\w/g, function(l){ return l.toUpperCase() });
}
if (/\S+@\S+\.\S+/.test('david@codeshack.io')) {
    console.log('Email is valid!');
} else {
    console.log('Email is invalid!');
}
const currentUrl = window.location.href;
const uniqueNums = [...new Set(nums)];
const isBitcoinAddress = (address) => {
  const regex = /[13][a-km-zA-HJ-NP-Z0-9]{25,34}/;
  return regex.test(address);
}
function countOccurences(str, char) {
  return str.split(char).length - 1;
}
function countOccurences(str, char) {
  return str.split(char).length - 1;
}
const array = [...Array(10).keys()].map(i => i + 1);
const onClickOutside = (elementId, callback) => {
  const element = document.getElementById(elementId);

  document.addEventListener("click", (e) => {
    if (!element.contains(e.target)) callback();
  });
};
const isRippleAddress = (address) => {
  const regex = /r[0-9a-zA-Z]{33}/;
  return regex.test(address);
}
let randomNum = Math.floor(Math.random() * maxNum);
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function sortByProperty(arr, property) {
  return arr.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
}
function toTitleCase(str) {
  return str.replace(/\w/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
const isPostalCode = (postalCode, countryCode) => {
  if (countryCode === 'US') {
    const regex = /[0-9]{5}(?:-[0-9]{4})?/;
    return regex.test(postalCode);
  } else if (countryCode === 'CA') {
    const regex = /[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] [0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/;
    return regex.test(postalCode.toUpperCase());
  } else {
    // Add regex for other country codes as needed
    return false;
  }
}
const uniqueNums = [...new Set(nums)];
if (localStorage.getItem('username')) {
    console.log('Item exists!');
}
function countOccurences(str, char) {
  return str.split(char).length - 1;
}
const randomString = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
