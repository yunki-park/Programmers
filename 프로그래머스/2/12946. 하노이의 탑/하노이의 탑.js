function hanoi(n, from, to, via, result) {
    if (n === 1) {
        result.push([from, to]);
        return;
    }
    
    hanoi(n-1, from, via, to, result);
    result.push([from, to]);
    hanoi(n-1, via, to, from, result);
}

function solution(n) {
    var result = [];
    hanoi(n, 1, 3, 2, result);
    
    return result;
}
