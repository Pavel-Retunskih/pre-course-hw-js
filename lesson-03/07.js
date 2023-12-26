const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

let res23 = [];
for (let i = 0; i < numbers.length; i++) {
    res23[i]=[]
    for (let j = 0; j < numbers[i].length; j++) {
        if (numbers[i][j] % 2 == 0) {
            res23[i].push(numbers[i][j])
        }
    }
}

console.log(res23);