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
