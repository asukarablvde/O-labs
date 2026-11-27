function pipe(...fns) {
    const handlers = [];

    function f(value) {
        let result = value;

        try {
            for (let i = 0; i < fns.length; i++) {
                result = fns[i](result);
            }

            return result;
        } catch (error) {
            handlers.forEach(handler => handler(error));
            return undefined;
        }
    }

    f.on = function(event, handler) {
        if (event === "error") {
            handlers.push(handler);
        }

        return f;
    };

    return f;
}

const inc = x => x + 1;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(cube, twice, inc);

console.log(f(2));

const g = pipe(
    x => x + 1,
    x => {
        throw new Error("Помилка!");
    },
    x => x * 2
);

g.on("error", e => {
    console.log("Помилка:", e.message);
});

console.log(g(5));
