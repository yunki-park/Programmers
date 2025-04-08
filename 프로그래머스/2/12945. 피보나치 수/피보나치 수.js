function solution(n) {
    // const dp = [0, 1];
    let num1 = 0;
    let num2 = 1;
    
    for (let i = 2; i <= n; i++) {
        const num3 = (num1 + num2) % 1234567;
        num1 = num2;
        num2 = num3;
    }
    
    return num2;
}