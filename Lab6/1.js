function pipe(...fns) {
    for (let fn of fns) {
        if (typeof fn !== "function") {
            throw new Error("Аргумент повинен бути функцією");
        }
    }

    return function(value) {
        return fns.reduce((result, fn) => fn(result), value);
    };
}

const inc = x => x + 1;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);

console.log(f(5));

const g = pipe(inc, inc);

console.log(g(7));

const h = pipe(inc, 2, cube);
