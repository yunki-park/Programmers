function solution(n) {
    const arr = Array(n).fill().map((_, index) => index + 1);
    const evenArr = arr.filter(v => v % 2 === 0);
    const sum = evenArr.reduce((acc, cur) => acc + cur, 0);
    
    return sum;
}