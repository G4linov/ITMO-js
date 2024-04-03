function factorialByFor(digit, increment = 1) {
    for(i = 1; i <= digit; ++i) {
        increment *= i;
    }
    return increment;
}

function factorialByReduce(...digit) {return [...digit].reduce((x,y) => x * y); }

console.log("С помощью цикла for: %d", factorialByFor(5))
console.log("С помощью цилк reduce: %d", factorialByReduce(1,2,3,4,5))