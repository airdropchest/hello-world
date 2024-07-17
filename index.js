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
class Orange extends Fruit {

    constructor() {
        super('Orange', 'Orange');
    }

    throw() {
        console.log('You threw the ' + this.name + '.');
    }

}
console.log(localStorage.getItem('username'));
const element = document.querySelector('#element');
if (element.offsetParent === null) {
    console.log('Element is hidden');
}
function countdownTimer(minutes) {
  let seconds = minutes * 60;
  const countdown = setInterval(function() {
    seconds--;
    if (seconds < 0) {
      clearInterval(countdown);
    } else {
      console.log(seconds + " seconds left");
    }
  }, 1000);
}
function reverseString(str) {
  return str.split("").reverse().join("");
}
const btn = document.querySelector('a[data-btn]');
btn.onclick = event => {
    event.preventDefault();
    // Output data attributes
    console.log(btn.dataset.name); // David
    console.log(btn.dataset.surname); // Adams
    console.log(btn.dataset.uniqueId); // 30
};
function reverseString(str) {
  return str.split("").reverse().join("");
}
const element = document.querySelector('#element');
if (element.offsetParent === null) {
    console.log('Element is hidden');
}
window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
});
const btn = document.querySelector('a[data-btn]');
btn.onclick = event => {
    event.preventDefault();
    // Output data attributes
    console.log(btn.dataset.name); // David
    console.log(btn.dataset.surname); // Adams
    console.log(btn.dataset.uniqueId); // 30
};
const element = document.querySelector('#element');
if (element.offsetParent === null) {
    console.log('Element is hidden');
}
let isValueInArray = arr.includes(value);
const onClickOutside = (elementId, callback) => {
  const element = document.getElementById(elementId);

  document.addEventListener("click", (e) => {
    if (!element.contains(e.target)) callback();
  });
};
const debounce = (fn, time) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), time);
  };
};
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(localStorage.getItem('username'));
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
let uniqueArr = [...new Set(arr)];
const onScrollStop = callback => {
  let isScrolling;
  window.addEventListener(
    'scroll',
    e => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        callback();
      }, 150);
    },
    false
  );
};
const uniqueNums = [...new Set(nums)];
let reversedStr = str.split("").reverse().join("");
const httpsRedirect = () => {
  if (location.protocol !== 'https:')
    location.replace('https://' + location.href.split('//')[1]);
};
const btn = document.querySelector('a[data-btn]');
btn.onclick = event => {
    event.preventDefault();
    // Output data attributes
    console.log(btn.dataset.name); // David
    console.log(btn.dataset.surname); // Adams
    console.log(btn.dataset.uniqueId); // 30
};
function countOccurences(str, char) {
  return str.split(char).length - 1;
}
fetch('https://example.com/authenticate', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: 'David', password: '12345' })
}).then(response => response.json()).then(data => {
    console.log(data);
}).catch(error => {
    console.error('Error:', error);
});
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
if (localStorage.getItem('username')) {
    console.log('Item exists!');
}
window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
});
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
let newArr = oldArr.map(function(item) {
  return item + 1;
});
const onScrollStop = callback => {
  let isScrolling;
  window.addEventListener(
    'scroll',
    e => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        callback();
      }, 150);
    },
    false
  );
};
const onClickOutside = (elementId, callback) => {
  const element = document.getElementById(elementId);

  document.addEventListener("click", (e) => {
    if (!element.contains(e.target)) callback();
  });
};
let reversedStr = str.split("").reverse().join("");
const array = [...Array(10).keys()].map(i => i + 1);
const randomString = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
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
function capitalizeWords(str) {
  return str.replace(/\w/g, function(l){ return l.toUpperCase() });
}
function sortByProperty(arr, property) {
  return arr.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
}
const isRGBColor = (rgb) => {
  const regex = /rgb\(\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*\)/;
  return regex.test(rgb);
}
let newArr = oldArr.map(function(item) {
  return item + 1;
});
const openTab = (url) => {
  window.open(url, "_blank");
};
window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
});
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const currentUrl = window.location.href;
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
const element = document.querySelector('#element');
if (element.offsetParent === null) {
    console.log('Element is hidden');
}
const onScrollStop = callback => {
  let isScrolling;
  window.addEventListener(
    'scroll',
    e => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        callback();
      }, 150);
    },
    false
  );
};
if (localStorage.getItem('username')) {
    console.log('Item exists!');
}
let reversedStr = str.split("").reverse().join("");
console.log(localStorage.getItem('username'));
class Orange extends Fruit {

    constructor() {
        super('Orange', 'Orange');
    }

    throw() {
        console.log('You threw the ' + this.name + '.');
    }

}
function generateArray(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
