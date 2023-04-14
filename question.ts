
/* Compare two times if the second time is earlier */
export const compareTwoTimesCheckTheSecondTimeIsEarlier = (
    time1: string,
    time2: string): boolean => {
    const result = new Date(time1).getTime() < new Date(time2).getTime();
    console.log(`Running compareTwoTimesCheckTheSecondTimeIsEarlier,\ntime-1: ${time1}, time-2: ${time2}`, result);
    return result;
}

/* Example of Question */
//Please generate a 6 digit random number string
export const generateSixDigitRandomNumberString = (): string => {
    const randomNumber = Math.floor(Math.random() * 900000) + 100000;
    console.log(`Running generateSixDigitRandomNumberString,it should be 6 digits\nrandomNumber: ${randomNumber}`);
    return `${randomNumber}`;
};

/* Write a function that takes in an array of numbers and returns the largest number in the array.*/
export const findLargestNumberInArray = (array: number[]): number => {
    var largest = 0;
    for(var i=0;i< array.length;i++){
        if (array[i]>largest) {
            largest=array[i];
        }
    }

    return largest;
}

/*Write a function that takes in an array of numbers and hereturns the sum of all of t odd numbers in the array.*/
export const sumOfOddNumbersInArray = (array: number[]): number => {
    var tot = 0;
    for(var i = 0; i<array.length;i++){
       if(array[i]%2 !== 0){
       tot += array[i]
       }
    }
    return tot;
}

/*Given an array of strings, return the longest one in the array.*/
export const longestStringInArray = (array: string[]): string => {
    var lgth = 0;
    var longest ="";
    for(var i = 0; i<array.length;i++){
        if (array[i].length > lgth) {
            lgth = array[i].length;
            longest = array[i];
          }
     }
    return longest;
}

/* Given an input of string(Assume that the input string only contains letters, no numbers or special characters),write a function that returns the number of vowels in the string. */
export const countVowelsInString = (string: string): number => {
    let count = 0;
    const vowels = ["a", "e", "i", "o", "u"]
    // loop through string to test if each character is a vowel
    for (let letter of string.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    // return number of vowels
    return count;
}

/* Write a function that reverse the input string. For example: “Animal” to “laminA”. */
export const reverseString = (string: string): string => {
    var newString = "";
    for (var i = string.length - 1; i >= 0; i--) { 
        newString += string[i]; // or newString = newString + str[i];
    }
    return newString;
}

/* Given two integers, write a function that takes returns the smallest common divisor of these two numbers.*/
export const smallestCommonDivisor = (number1: number, number2: number): number => {
    let x = Math.abs(number1);
    let y = Math.abs(number2);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return (!number1 || !number2) ? 0 : Math.abs((number1 * number2) / x);
}

/*Given a word, return if this word is palindromes. For example, ‘level’, ‘civic’, ‘kayak’ are palindromes because they reads the same way forwards and backwards.*/
export const isPalindrome = (string: string): boolean => {
    let start = 0;
    let last = string.length - 1;
   
    let newStr = string.toLowerCase().replace(/[^0-9a-z]/g, "");
    while(start <= last) {
        if (newStr[start]!=newStr[last]) {
                return false;
            }
            start++;
            last--;
        }
    return true;
}

/*Given an array of numbers, return a new array with all the even numbers doubled.*/
export const doubleEvenNumbersInArray = (array: number[]): number[] => {
    for(var i = 0; i<array.length;i++){
        if (array[i]%2 == 0) {
            array[i]= array[i]*2;
          }
     }
    return array;
}

/*Given two arrays of numbers, write a function that returns a new array containing all the numbers that are common to both arrays in ascending order.*/
export const commonNumbersInTwoArrays = (array1: number[], array2: number[]): number[] => {
    var matches = [];

    for ( var i = 0; i < array1.length; i++ ) {
        for ( var e = 0; e < array2.length; e++ ) {
            if ( array1[i] === array2[e] ) matches.push( array1[i] );
        }
    }
    return matches;

}

/*Given a string, write a function that returns the most common letter in the string.*/
export const mostCommonLetterInString = (string: string): string => {

    if (string.length === 0) 
    {
    return 'String should not be empty!'
   }
  
  const occurrence_Map = new Map()

  for (const char of string) 
    {
      occurrence_Map.set(char, occurrence_Map.get(char) + 1 || 1)
    }

  // find the max char from the occurrence map
  let max_char = { char: '', occur: -Infinity }

  for (const [char, occur] of occurrence_Map) {
    if (occur > max_char.occur) {
      max_char = { char,occur }
    }
  }

  return max_char.char
}
const main = (async () => {
    /* Compare two times if the second time is earlier */
    compareTwoTimesCheckTheSecondTimeIsEarlier('2020-01-01 00:00:00', '2020-01-01 00:00:01');
    compareTwoTimesCheckTheSecondTimeIsEarlier('2020-01-01 00:00:01', '2020-01-01 00:00:00');
    /* Generate a 6 digit random number String*/
    generateSixDigitRandomNumberString();
    /*takes in an array of numbers and returns the largest number in the array*/
    var str = [1,2,56,44,3,11,34,29];
    console.log(`Running findLargestNumberInArray,findLargestNumberInArray should be 56 ` , findLargestNumberInArray(str));
    console.log(`Running generateSixDigitRandomNumberString,sumOfOddNumbersInArray should be 44 ` ,sumOfOddNumbersInArray(str));
    // sumOfOddNumbersInArray(str);
    var string =["aaaaaaaa","bbbb","vcvv","eeeeeeeeeeeeeeeee","e",""];
    console.log(`Running longestStringInArray,longestStringInArray should be "eeeeeeeeeeeeeeeee" ` ,longestStringInArray(string));
    var string1="jaijdijfihrije";
    console.log(`Running countVowelsInString,countVowelsInString should be 6 `, countVowelsInString(string1));
    console.log(`Running reverseString,reverseString should be ejirhifjidjiaj `, reverseString(string1));
    console.log(`Running smallestCommonDivisor, smallestCommonDivisor should be 200  `,smallestCommonDivisor(10,200));
    console.log(`Running isPalindrome, isPalindrome should be true `, isPalindrome("abanaba"));
    console.log(`Running doubleEvenNumbersInArray, doubleEvenNumbersInArray should be  1,4,112,88,3,11,68,29`, doubleEvenNumbersInArray(str));
    console.log(`Running commonNumbersInTwoArrays, commonNumbersInTwoArrays should be  2,3,4,12`, commonNumbersInTwoArrays([1,2,3,4,5,12,23],[2,3,4,12]));
    console.log(`Running mostCommonLetterInString, mostCommonLetterInString should be a: `, mostCommonLetterInString("abanaba"));

})();