function solution(answers) {
    const result = [];
    
    const size = answers.length;
    
    // 12345(5)
    const a = Array(size);
    const aPattern = [1, 2, 3, 4, 5];
    fillArray(a, size, aPattern);
    
    // 21232425(8)
    const b = Array(size);
    const bPattern = [2, 1, 2, 3, 2, 4, 2, 5];
    fillArray(b, size, bPattern);
    
    // 3311224455(10)
    const c = Array(size);
    const cPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    fillArray(c, size, cPattern);
    
    const aPoint = checkArray(answers, a);
    const bPoint = checkArray(answers, b);
    const cPoint = checkArray(answers, c);
    
    const maxPoint = Math.max(aPoint, bPoint, cPoint);
    // console.log(maxPoint);
    
    if (aPoint === maxPoint) result.push(1);
    if (bPoint === maxPoint) result.push(2);
    if (cPoint === maxPoint) result.push(3);
    
    return result;
}

function fillArray(array, size, pattern) {
    for (let i = 0; i < size; i++) {
        array[i] = pattern[i % pattern.length];
    }
}

function checkArray(answer, array) {
    let point = 0;
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === array[i]) {
            point++;
        }
    }
    return point;
}