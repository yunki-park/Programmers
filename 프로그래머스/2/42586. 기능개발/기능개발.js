// 개요
// 기능별 작업 진도, 개발 속도가 주어질 때, 각 배포별 포함된 기능 수 구하기

// 조건
// progresses.length <= 100
// speeds.length <= 100
// progress.length === speeds.length
// progresses < 100 (0~99)
// speeds <= 100 (0~100)

// 입력
// 기능별 작업 진도 배열 progresses, 작업 개발 속도 배열 speeds

// 출력
// 배열, 각 배포별 포함된 기능 수

function solution(progresses, speeds) {
    const counts = [];
    
    // 1. 각 기능별 배포까지 필요한 날짜 계산
    // [7, 3, 9]
    const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
    // console.log(days);
    
    // 2. 배포 단위 나누고 각 배포별 기능 수 구하기
    // 7, 3 / 9
    
    let prevDay = days[0]; // 7
    let count = 1;
    
    for (let i = 1; i < days.length; i++) {
        if (days[i] <= prevDay) {
            count++;
        } else {
            counts.push(count); // [2], [2, 1]
            count = 1;
            prevDay = days[i]; // 9
        }
    }
    counts.push(count);
    
    return counts; // [2, 1]
}


// function solution(progresses, speeds) {
//     const answer = [1];
    
//     const days = Array(progresses.length).fill().map((v, i) => {
//         const progress = progresses[i];
//         const speed = speeds[i];
        
//         return Math.ceil((100 - progress) / speed);
//     });
//     // console.log(days)
    
//     let tmpValue = days[0];
//     for (let i = 1; i < days.length; i++) {
//         if (tmpValue >= days[i]) {
//             answer[answer.length-1] += 1;
//         } else {
//             answer.push(1);
//             tmpValue = days[i];
//         }
//     }
    
//     return answer;
// }