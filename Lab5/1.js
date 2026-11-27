function seq(...funcs) {
    return function (fn) {
        if (typeof fn === "number") {
            return funcs.reduceRight((value, f) => f(value), fn);
        }

        return seq(fn, ...funcs);
    };
}

console.log(
    seq(x => x + 7)
    (x => x * 2)(5)
);

console.log(
    seq(x => x + 2)
    (x => x + 7)(5)
); // 14

console.log(
    seq(x => x + 1)
    (x => x * 2)
    (x => x / 3)
    (x => x - 4)(7)
);
