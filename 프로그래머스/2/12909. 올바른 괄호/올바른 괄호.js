// 개요
// 문자열 s에 포함된 () 괄호 짝 일치 여부 구하기

// 조건
// s <= 10^5

// 입력
// 문자열 s, ("(", ")")

// 출력
// Boolean, 괄호 짝 일치 여부

function solution(s) {    
    const stack = [];
    
    if (s[0] === ')') {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (char === '(') {
            stack.push(char);
        } else {
            stack.pop();
        }
    }
    
    return stack.length === 0;
}