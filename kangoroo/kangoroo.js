const result = kangoroo(1, 2, 2, 1);
console.log(result);

function kangoroo(x1, v1, x2, v2) {
    let result = 'NO';

    if (v2 >= v1) {
        return result;
    }

    if ((x1 - x2) % (v2 - v1) === 0) {
        result = 'YES';
    }

    return result;
}

module.exports = kangoroo;