// 개요
// 3명의 수포자가 일정한 패턴으로 문제를 찍을 때, 가장 많이 맞힌 사람 구하기

// 조건
// answers.length <= 10^4
// answer 1~5 정수

// 입력
// answers: 정수 배열, 문제 정답

// 출력
// 정수 배열, 동점자 포함 가장 많이 맞힌 사람 번호 (1~3)

function solution(answers) {
    const result = [];
    
    const aPattern = [1, 2, 3, 4, 5];
    const bPattern = [2, 1, 2, 3, 2, 4, 2, 5];
    const cPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const points = [0, 0, 0];
    for (let i = 0; i < answers.length; i++) {
        if (aPattern[i % aPattern.length] === answers[i]) {
            points[0]++;
        }
        
        if (bPattern[i % bPattern.length] === answers[i]) {
            points[1]++;
        }
        
        if (cPattern[i % cPattern.length] === answers[i]) {
            points[2]++;
        }
    }
    
    const maxPoint = Math.max(...points);
    for (let i = 0; i < points.length; i++) {
        if (points[i] === maxPoint) {
            result.push(i + 1);
        }
    }
    
    return result;
}


// function solution(answers) {
//     const result = [];
    
//     const size = answers.length;
    
//     // 12345(5)
//     const a = Array(size);
//     const aPattern = [1, 2, 3, 4, 5];
//     fillArray(a, size, aPattern);
    
//     // 21232425(8)
//     const b = Array(size);
//     const bPattern = [2, 1, 2, 3, 2, 4, 2, 5];
//     fillArray(b, size, bPattern);
    
//     // 3311224455(10)
//     const c = Array(size);
//     const cPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
//     fillArray(c, size, cPattern);
    
//     const aPoint = checkArray(answers, a);
//     const bPoint = checkArray(answers, b);
//     const cPoint = checkArray(answers, c);
    
//     const maxPoint = Math.max(aPoint, bPoint, cPoint);
//     // console.log(maxPoint);
    
//     if (aPoint === maxPoint) result.push(1);
//     if (bPoint === maxPoint) result.push(2);
//     if (cPoint === maxPoint) result.push(3);
    
//     return result;
// }

// function fillArray(array, size, pattern) {
//     for (let i = 0; i < size; i++) {
//         array[i] = pattern[i % pattern.length];
//     }
// }

// function checkArray(answer, array) {
//     let point = 0;
//     for (let i = 0; i < answer.length; i++) {
//         if (answer[i] === array[i]) {
//             point++;
//         }
//     }
//     return point;
// }