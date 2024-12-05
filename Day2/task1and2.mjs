import { readFileSync } from 'fs';


const data = readFileSync('./Day2/input.txt', 'utf8');
const lines = data.trim().split('\n');
const subArrays = lines.map(line => {
    const numbers = line.trim().split(/\s+/).map(Number);
    return numbers;
});

//console.log(subArrays);

//----------------------------------------------

//                                   task1
let counter = 0
const callMyall = (array) => {
    let isIncreasing = array[0] < array[1]
    let isDecreasing = array[0] > array[1]
    let counterfn = []
    for (let i = 1; i < array.length; i++) {
        if(Math.abs(array[i-1] - array[i]) > 3) counterfn.push(false)
        if(Math.abs(array[i-1] - array[i]) < 1) counterfn.push(false)
        if (isIncreasing && array[i-1] >= array[i]) counterfn.push(false)
        if (isDecreasing && array[i-1] <= array[i]) counterfn.push(false)
    }
    return counterfn.every(el => el)
}
subArrays.forEach(el => callMyall(el) &&  counter++)


//-------------------------------------------------------
//                                    task2

const filterFunc = (array) => {
    
    for (let i = 0; i < array.length; i++) {
        let newArray = array.slice(0, i).concat(array.slice(i + 1))
        if ( callMyall(newArray) ){
            return newArray
          }
      }
    return array
}
let counter2 = 0
const filteredSum = subArrays.map(el => filterFunc(el) )
filteredSum.forEach(el => callMyall(el) &&  counter2++)

console.log(counter);
console.log(counter2);

