function solution(numbers) {
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    const len = numbers.length;
    return sum / len;
}