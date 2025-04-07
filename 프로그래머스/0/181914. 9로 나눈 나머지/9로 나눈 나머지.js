function solution(number) {
    return number.split('').reduce((sum, num) => sum + Number(num), 0) % 9;
}