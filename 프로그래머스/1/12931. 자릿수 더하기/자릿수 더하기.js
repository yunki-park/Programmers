function solution(n) {
    return n.toString().split('').reduce((sum, num) => sum + Number(num), 0);
}