// 개요
// 배열 i~j 자르고 정렬 -> k번째 수

// 조건
// array.length <= 100
// commands.length <= 50

// 입력
// array: 정수 배열 (1~100)
// commands: 2차 배열, [i, j, k]

// 출력
// 배열, 배열 i~j 자르고 정렬 -> k번째 수

function solution(array, commands) {
    const result = [];
    
    for (let command of commands) {
        const [i, j, k] = command;
        
        const sliced = array.slice(i - 1, j);
        const sorted = sliced.sort((a, b) => a - b);
        
        const kNumber = sorted[k - 1];
        result.push(kNumber);
    }
    
    return result;
}