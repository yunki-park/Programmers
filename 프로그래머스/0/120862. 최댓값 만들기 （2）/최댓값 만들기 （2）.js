function solution(numbers) {
    const sorted = numbers.sort((a, b) => a - b);
    const length = sorted.length;
    
    return Math.max(sorted[0] * sorted[1], sorted[length - 1] * sorted[length - 2]);
}