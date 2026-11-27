function sumForOf(...args) {
    let result = 0;

    for (let num of args) {
        result += num;
    }

    return result;
}

console.log(sumForOf(1, -1, 1));
