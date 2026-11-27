function contract(fn, ...types) {
    return function(...args) {
        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] !== types[i].name.toLowerCase()) {
                throw new TypeError("Wrong argument type");
            }
        }

        let result = fn(...args);

        let resultType = types[types.length - 1].name.toLowerCase();

        if (typeof result !== resultType) {
            throw new TypeError("Wrong result type");
        }

        return result;
    };
}

const add = (a, b) => a + b;

const addNumbers = contract(add, Number, Number, Number);

const res = addNumbers(2, 3);

console.log(res); 

const concat = (s1, s2) => s1 + s2;

const concatStrings = contract(concat, String, String, String);

const res2 = concatStrings('Hello ', 'world!');

console.log(res2);
