// 개요
// 논문들의 인용 횟수 citations가 주어질 때, H-index 구하기
// 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값

// 조건
// n <= 10^3 (1~1000)
// h <= 10^4 (0~10000)

// 입력
// 정수 배열 citations

// 출력
// 정수 H-index

function solution(citations) {
    let hIndex = 0;

    const n = citations.length;
    const sorted = citations.sort((a, b) => b - a);
    console.log(sorted);
    
    for (let h = 0; h <= n - 1; h++) {
        const tempHIndex = Math.min(sorted[h], h + 1);
        hIndex = Math.max(hIndex, tempHIndex);
    }
    
    return hIndex;
}




// function solution(citations) {
//     let answer = 0;
    
//     citations.sort((a, b) => a - b);
//     for (let i = 0; i < citations.length; i++) {
//         const h1 = citations[i];
//         const h2 = citations.filter(num => num >= h1).length;
//         const currentH = Math.min(h1, h2);
//         answer = Math.max(answer, currentH);
//     }

//     return answer;
// }