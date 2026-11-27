function unique(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (!result.includes(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
}

const result = unique([2, 1, 1, 3, 2]);

console.log(result);

const result2 = unique(['top', 'bottom', 'top', 'left']);

console.log(result2);
