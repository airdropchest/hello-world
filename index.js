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
let isValueInArray = arr.includes(value);
window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
});
const array = [...Array(10).keys()].map(i => i + 1);
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
const isEthereumAddress = (address) => {
  const regex = /0x[a-fA-F0-9]{40}/;
  return regex.test(address);
}
let newArr = oldArr.map(function(item) {
  return item + 1;
});
class Fruit {

    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    eat() {
        console.log('You ate the ' + this.name + '.');
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get color() {
        return this._color;
    }

    set color(color) {
        this._color = color;
    }   

}
const onClickOutside = (elementId, callback) => {
  const element = document.getElementById(elementId);

  document.addEventListener("click", (e) => {
    if (!element.contains(e.target)) callback();
  });
};
setTimeout(() => location.href = "https://codeshack.io", 10000);
console.log(localStorage.getItem('username'));
window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
});
setTimeout(() => location.href = "https://codeshack.io", 10000);
let uniqueArr = [...new Set(arr)];
class Fruit {

    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    eat() {
        console.log('You ate the ' + this.name + '.');
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get color() {
        return this._color;
    }

    set color(color) {
        this._color = color;
    }   

}
const isCreditCard = (cc) => {
  const regex = /(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})/;
  return regex.test(cc);
}
if (/\S+@\S+\.\S+/.test('david@codeshack.io')) {
    console.log('Email is valid!');
} else {
    console.log('Email is invalid!');
}
let uniqueArr = [...new Set(arr)];
const btn = document.querySelector('a[data-btn]');
btn.onclick = event => {
    event.preventDefault();
    // Output data attributes
    console.log(btn.dataset.name); // David
    console.log(btn.dataset.surname); // Adams
    console.log(btn.dataset.uniqueId); // 30
};
function generateArray(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
});
