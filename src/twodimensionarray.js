
let num = [[1, 2, 3], [10, 20, 30], [100, 200, 300]]

for (let i = 0; i <= num.length - 1; i++) {
    for (let j = 0; j < num[i].length; j++) {
        console.log(num[i][j]);
    }
}



let num1 = [[1, 2, 3], [10, 20, 30], [100, 200, 300], [78, 98]]

for (let i = 0; i <= num1.length - 1; i++) {
    for (let j = 0; j < num1[i].length; j++) {
        //console.log(num1[i][j]);
        process.stdout.write(`${num1[i][j]}`)
    }
    process.stdout.write(`\n`)
}
process.stdout.write(`\n`)

