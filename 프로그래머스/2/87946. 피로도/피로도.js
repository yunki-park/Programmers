// 개요
// 현재 피로도 및 던전별 최소 필요/소모 피로도가 주어질 때, 탐험 가능한 최대 던전 수

// 조건
// 1 <= k <= 5*10^3 
// 1 <= dungeons.length <= 8
// 그 외 지문 참조

// 입력
// k: 정수, 현재 피로도
// dungeons: 2차원 배열, [최소 필요 피로도, 소모 피로도]

// 출력
// 정수, 탐험 가능한 최대 던전 수

// 완전 탐색
function solution(k, dungeons) {
    let maxCount = 0;
    const visited = Array.from({ length: dungeons.length }, () => 0);
    
    function dfs(currentK, visited, count) {
        // maxCount 갱신
        maxCount = Math.max(maxCount, count);
        
        // 던전 순회
        for (let i = 0; i < dungeons.length; i++) {
            const [required, consumed] = dungeons[i];

            if (visited[i] || currentK < required) {
                continue;
            }
            
            visited[i] = true;
            dfs(currentK - consumed, visited, count + 1);
            visited[i] = false;
        }        
    }
    
    dfs(k, visited, 0);

    return maxCount;
}



// // greedy - 63.2
// function solution(k, dungeons) {
//     let count = 0;
    
//     // 1. 소모 피로도 순으로 dungeons 정렬
//     dungeons.sort((a, b) => a[1] - b[1]);
//     console.log(dungeons);
    
//     // 2. dungeons 순서대로 순회하며 최소 필요 피로도 체크하여 가능한 것들 진행
//     for (let i = 0; i < dungeons.length; i++) {
//         const [required, consumed] = dungeons[i];
        
//         if (k >= required) {
//             count++;
//             k -= consumed;
//         }
//     }

//     return count;
// }