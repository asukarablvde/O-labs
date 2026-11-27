function array() {
    const arr = [];

    function a(index) {
        return arr[index];
    }

    a.push = function(value) {
        arr.push(value);
    };

    a.pop = function() {
        return arr.pop();
    };

    return a;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
