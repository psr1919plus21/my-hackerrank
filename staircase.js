console.log(staircase(6));

function staircase(n) {
    let result = '';

    for (let row = 0; row < n; row++) {
        let spacesCount = n - row - 1;
        
        for (let col = 0; col < n; col++) {
            if (spacesCount) {
                result += ' ';
                spacesCount--;
            } else {
                result += '#';
            }
        }
        result += '\n';
    }

    
    return result;
}