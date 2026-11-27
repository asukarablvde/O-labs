function removeElements(array, ...items) {
    for (let i = 0; i < items.length; i++) {
        let index = array.indexOf(items[i]);

        if (index !== -1) {
            array.splice(index, 1);
        }
    }
}

const array = [1, 2, 3, 4, 5, 6, 7];

removeElements(array, 5, 1, 6);

console.log(array); // [2, 3, 4, 7]
