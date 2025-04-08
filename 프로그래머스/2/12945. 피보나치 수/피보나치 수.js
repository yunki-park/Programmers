function solution(n) {
    let num1 = 0n;
    let num2 = 1n;
    
    for (let i = 2n; i <= n; i++) {
        const num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    
    return num2 % 1234567n;
}