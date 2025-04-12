// 개요
// 한 자리 정수 배열에서 연속 숫자 제거한 배열 구하기

// 조건
// arr <= 10^6

// 입력
// 한 자리 정수 배열 (0~9)

// 출력
// 한 자리 정수 배열 (0~9)
// 동일 숫자 연속된 경우 제거

function solution(arr) {
    const resultArr = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        const latest = resultArr[resultArr.length - 1];
        const current = arr[i];
        
        if (latest !== current) {
            resultArr.push(current);
        }
    }
    
    return resultArr;
}

// function solution(arr)
// {
//     const answer = [];
    
//     for (const item of arr) {
//         const answerTop = answer[answer.length - 1];
        
//         if (answerTop !== item) {
//             answer.push(item);
//         }
//     }
    
//     return answer;
// }