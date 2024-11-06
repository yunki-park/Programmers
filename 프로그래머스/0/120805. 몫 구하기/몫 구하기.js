function solution(num1, num2) {
    // return Math.floor(num1 / num2);
    // 정수부분 반환 (소수점 제거) - 음수든 양수든 단순히 정수부분만 반환
    return Math.trunc(num1 / num2);
}