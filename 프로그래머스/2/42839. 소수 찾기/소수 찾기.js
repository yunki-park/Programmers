// 개요
// 숫자들의 조합 문자열 numbers가 주어졌을 때, 각 number를 조합해 만들 수 있는 소수 개수 구하기

// 조건
// numbers.length <= 7 (1~7)
// number 0~9 정수

// 입력
// numbers: 숫자로 이루어진 문자열

// 출력
// number 조합으로 만들 수 있는 소수 개수 (중복X)
// 0으로 시작하는 케이스 예외 처리

function solution(numbers) { // "17"    
    // 0. 숫자 배열로 변환
    // [1, 7]
    const numberArray = numbers.split('');
    
    // 1. 만들 수 있는 조합 구하기
    // [1, 7, 17, 71]
    const combinations = new Set();
    
    function makeCombinations(cur, rest) {
        combinations.add(Number(cur));

        for (let i = 0; i < rest.length; i++) {
            const next = cur + rest[i];
            const nextRest = rest.slice(0, i).concat(rest.slice(i + 1));

            makeCombinations(next, nextRest);
        }
    }
    
    makeCombinations('', numberArray);
    console.log(combinations);
    
    // 2. 조합 내 요소들 소수 판별 및 카운팅
    // [7, 17, 71], 3
    return [...combinations].filter(num => isPrime(num)).length;
}

// 소수 판별 함수
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}