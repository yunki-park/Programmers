function solution(hp) {
    let a = 0, b = 0, c = 0;
    
    a = Math.floor(hp / 5);
    hp %= 5;
    
    b = Math.floor(hp / 3);
    hp %= 3;
    
    c = hp;
    
    return a + b + c;
}