// 개요
// 주어진 문자열이 "AEIOU 조합 사전"에서 몇 번째 단어인지 찾기

// 조건
// 1 <= word.length <=5

// 입력
// word: 문자열

// 출력
// 정수, 사전 상 순서

function solution(word) {
    let order = 0;
    
    const weight = [781, 156, 31 ,6, 1];
    for (let i = 0; i < word.length; i++) {
        console.log(convertCtoN(word[i]));
        order += convertCtoN(word[i]) * weight[i];
    }
    
    return order + word.length;
}

function convertCtoN(char) {
    let number = 0;
    
    switch (char) {
        case 'A':
            number = 0;
            break;
        case 'E':
            number = 1;
            break;
        case 'I':
            number = 2;
            break;
        case 'O':
            number = 3;
            break;
        case 'U':
            number = 4;
            break;
        default:
            break;
    }
    
    return number;
}