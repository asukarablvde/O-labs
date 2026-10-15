'use strict';

const arr = [true, 'hello', 5, 12, -200, false, false, 'word'];

const collection = {
    number: 0,
    string: 0,
    boolean: 0
};

for (const item of arr) {
    if (typeof item === 'number') {
        collection.number++;
    } else if (typeof item === 'string') {
        collection.string++;
    } else if (typeof item === 'boolean') {
        collection.boolean++;
    }
}

console.log(collection);
