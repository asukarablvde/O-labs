function sumReduce(...args) {
    return args.reduce((total, num) => total + num, 0);
}

console.log(sumReduce(10, -1, -1, -1)); 
console.log(sumReduce());              
