// console.log("i'm working");

const users = [
  {
    name: "Tom",
    age: 12,
  },
  {
    name: "Pete",
    age: 3,
  },
  {
    name: "Lucas",
    age: 5,
  },
];

const getNames = (obj) => {
  let namesArr = [];
  for (let i = 0; i < obj.length; i++) {
    namesArr.push(obj[i].name);
  }
  return namesArr;
};

// const result = getNames(users);

// console.log(result);

// console.log(getNames(users));

// Using Map

const result = users.map((user) => {
  return user.name;
});
console.log(result);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// const getEvenNums = (arr) => {
//     let evenNums = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenNums.push(arr[i])
//         }
//     }
//     return evenNums;
// }

// console.log(getEvenNums(nums));

const answer = nums.map((num) => {
  if (num % 2 !== 0) {
    return num;
  } else {
    return null;
  }
});

console.log(answer);
// Algorithms

let string = "Judeeoirjwoiefwno";
const lastLetter = (str) => {
  for (let i = 0; i < str.length; i++) {
    return str[str.length - 1];
  }
};

console.log(lastLetter(string));

let word = "sample";

const check = (space, str) => {
  if (space.length !== str.length) {
    return false;
  }
  for (let i = 0; i < space.length; i++) {
    if (space[i] !== "-" && space[i] !== str[i]) {
      return false;
    }
  }
  return true;
};

console.log(check("-a----", word));

let longestWord = ["aaap", "wdrfkr", "theobroma"];

const getLongestWord = (arr) => {
  let longestWord = "";
  arr.map((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
  // arr.map(word => {
  //     if (word.length > longestWord.length) {
  //         longestWord = word
  //     }
  // })
  // for (const word of arr) {
  //     if (word.length > longestWord.length) {
  //         longestWord = word
  //     }
  // }
  // for (i = 0; i < arr.length; i++) {
  //     if (arr[i].length > longestWord.length) {
  //         longestWord = arr[i]
  //     }
  // }
  // return longestWord
};

console.log(getLongestWord(longestWord));

let sampleWord = "thist";

const mapString = (str) => {
  let stringMap = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    console.log(letter);
    if (stringMap[letter]) {
      stringMap[letter].push(i);
      console.log(stringMap[letter]);
    } else {
      stringMap[letter] = [i];
    }
  }
  return stringMap;
};

console.log(mapString(sampleWord));

let testObj = { h: [1], i: [2], s: [3], t: [0, 4] };
let sampleWords = "thistp";

const checkLetters = (str, obj) => {
  for (const letter of sampleWord) {
    if (obj[letter]) {
        return true
    }
  }
  return false
};

console.log(checkLetters(sampleWords, testObj))
const timeHeading = document.getElementById('time');
const dayHeading = document.getElementById('day'); 

const timeFunc = () => {
    const time = new Date();
    let hours = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    const milliSecs = time.getMilliseconds();
    
    hours = (hours < 10) ? `0${hours}`: hours;
    mins = (mins < 10) ? `0${mins}`: mins;
    secs = (secs < 10) ? `0${secs}`: secs; 
    let timeOfDay = hours < 12 ? 'AM': 'PM';
    
    timeHeading.textContent = `Current time is: ${hours} : ${mins}: ${secs}: ${milliSecs} ${timeOfDay}`;
}

const dayFunc = () => {
    const time = new Date();
    const today = time.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    dayHeading.textContent = `Today is ${days[today]}`
}


console.log(setInterval(timeFunc, 1000))
console.log(setInterval(dayFunc, 1000))

timeHeading.addEventListener('load', timeFunc())
dayHeading.addEventListener('load', dayFunc())

document.getElementById('print').addEventListener('click',() => {window.print()})