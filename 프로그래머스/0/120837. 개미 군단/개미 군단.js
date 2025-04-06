function solution(hp) {
    let a = 0, b = 0, c = 0;
    
    a = Math.floor(hp / 5);
    b = Math.floor((hp - a * 5) / 3);
    c = hp - a * 5 - b * 3;
    
    return a + b + c;
}