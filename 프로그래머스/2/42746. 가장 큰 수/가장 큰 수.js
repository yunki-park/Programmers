// 개요
// 정수 배열 numbers 요소들을 이어 붙여 만들 수 있는 가장 큰 수 구하기

// 조건
// numbers.length <= 10^5
// number <= 10^3

// 입력
// 정수 배열 numbers (number >= 0)

// 출력
// 만들 수 있는 가장 큰 수, 문자열

function solution(numbers) {
    let result = "";
    
    // 1. 첫 번째 가설 -> 반례 30, 3 (330 > 303)
    // const sorted = numbers.sort().reverse();
    // console.log(sorted);

    // 2. string으로 변환해서 정렬
    const string = numbers.map(String);
    // console.log(string);
    
    const sortedString = string.sort((a, b) => (b + a).localeCompare(a + b));
    console.log(sortedString);

    if (sortedString[0] === '0') {
        result = '0';
    } else {
        result = sortedString.join('');
    }
    
    return result;
}


// function solution(numbers) {
//     const sorted = numbers.map(String).sort((a, b) => (b + a) - (a + b));
//     const answer = sorted.join('');
    
//     return answer[0] === '0' ? '0' : answer;
// }