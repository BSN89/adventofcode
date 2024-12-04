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

//------------------------------------------------
let sumArr = []
firstNumbers.sort((a,b) => a - b)
secondNumbers.sort((a,b) => a - b)
for (let i = 0; i < firstNumbers.length; i++) {
    sumArr
     .push(
         firstNumbers[i] > secondNumbers[i] 
        ? firstNumbers[i] - secondNumbers[i] 
        : secondNumbers[i] - firstNumbers[i]
        )
}
const result = sumArr.reduce((acc,el) => acc + el, 0)
console.log(result)