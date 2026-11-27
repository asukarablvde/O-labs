function sumWhile(...args) {
    let result = 0;
    let i = 0;

    while (i < args.length) {
        result += args[i];
        i++;
    }

    return result;
}

console.log(sumWhile(10, -1, -1, -1)); 
