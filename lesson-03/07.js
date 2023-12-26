const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];


for (const arr of numbers) {
    for (const number of arr) {
        if(number % 2 !== 0){
            console.log(number);
        }
    }
}

console.log(numbers);