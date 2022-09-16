const arr = [{amount: 1}, {amount: 10}, {amount: 20}];
let summ = 0;
arr.map(num => {
    summ += num.amount
})
console.log(summ)