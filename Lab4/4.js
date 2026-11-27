function sumDoWhile(...args) {
    let result = 0;
    let i = 0;

    do {
        if (i < args.length) {
            result += args[i];
            i++;
        }
    } while (i < args.length);

    return result;
}

console.log(sumDoWhile(1, 2, 3)); // 6
