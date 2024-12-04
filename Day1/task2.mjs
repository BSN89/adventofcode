import { readFileSync } from 'fs';

const data = readFileSync('./Day1/input.txt', 'utf8');

const lines = data.trim().split('\n');

const firstNumbers = [];
const secondNumbers = [];

lines.forEach((line, index) => {
    const parts = line.trim().split(/\s+/); 
    if (parts.length !== 2) {
        console.error(`Ошибка: строка ${index + 1} содержит некорректное количество элементов: ${parts}`);
        return;
    }
    const [first, second] = parts.map(Number);
    if (isNaN(first) || isNaN(second)) {
        console.error(`Ошибка: строка ${index + 1} содержит некорректные числа: ${parts}`);
        return;
    }
    firstNumbers.push(first);
    secondNumbers.push(second);
});
// console.log(firstNumbers);
// console.log(secondNumbers);

//---------------------------------------
const countObj = {}
let resArr = []

firstNumbers.forEach(el => {
    if(secondNumbers.includes(el)){
        if(countObj[el]){
            countObj[el]++
          }else{
            countObj[el] = 1
          }
    }
} )
secondNumbers.forEach(el => countObj[el] && resArr.push(el * countObj[el]) )
console.log(resArr.reduce((acc, el) => acc + el ))