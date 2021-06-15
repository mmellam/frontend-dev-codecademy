const _ = {
    clamp(nr, lb, ub) {
      return Math.max(Math.min(nr, ub), lb);
    },
    inRange(nr, start, end) {
      if (end === undefined) {
        end = start;
        start = 0;
      }
      if (start > end) {
        let temp = start;
        start = end;
        end = temp;
      }
      const isInRange = (nr >= start && nr < end);
      return isInRange;
    },
    words(string) {
      let words = string.split(' ');
      return words;
    },
    pad(string, length) {
      if (string.length >= length) {
        return string
      }
      let padStart = Math.floor((length-string.length)/2);
      let padEnd = length - string.length - padStart;
      return ' '.repeat(padStart) + string + ' '.repeat(padEnd);
    },
    has(object, key) {
      if (object[key] != undefined) {
        return true
      }
        return  false;
      },
    findKey(object, predicate) {
      for (let item in object) {
        const value = object[item];
        const predicateReturnValue = predicate(value);
        if (predicateReturnValue) {
          return item;
        }
      };
      return undefined;
     },
     drop(array, number) {
       const newArrayLength = array.length - number;
       const newArray = [];
       if (!number) {
         number = 1;
       }
       for (let i = number; i < array.length; i++) {
         newArray.push(array[i])
       }
       return newArray;
     },
     dropWhile(array, predicate) {
       const newArray = array;
   
       while (predicate) {
         newArray.unshift();
       }
       return newArray;
     },
     chunk(array, size) {
       if (!size) {
         size = 1;
       }
       const newArr = [];
       for (let i = 0; i<array.length/size; i++) {
         newArr.push(array.slice(size*i, size + size*i))
       }
       return newArr;
     }
    }
   
   
   // Do not write or modify code below this line.
   module.exports = _;