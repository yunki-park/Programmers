// 개요
// n개의 송전탑이 "트리" 형태로 연결되어 있고,
// 전선 하나를 끊어서 2개로 분할할 때 송전탑 개수 차이의 최소값 구하기

// 조건
// 2 <= n <= 100
// wires.length = n - 1
// 1 <= v1 < v2 <= n

// 입력
// n: 정수, 송전탑 개수
// wires: 2차원 정수 배열, 전선 연결 정보 [v1, v2]

// 출력
// 정수, 송전탑 개수 차이의 최소값

function solution(n, wires) {
    let minDiff = Infinity;
    
    // i-j 전선 끊었을 때 두 그래프 구성
    // 두 그래프의 크기 측정 및 diff 계산
    // minDiff 갱신

    for (let i = 0; i < wires.length; i++) {
        // 인접 리스트
        const graph = Array.from({ length: n + 1 }, () => []);
    
        for (let j = 0; j < wires.length; j++) {
            if (i === j) {
                continue;
            }
            const [a, b] = wires[j];
            graph[a].push(b);
            graph[b].push(a);
        }
        
        // console.log(graph);
        const visited = Array.from({ length: n + 1}, () => false);
        const count = dfs(1, graph, visited);
        // console.log(count);
        const diff = Math.abs(count - (n - count));
        minDiff = Math.min(minDiff, diff);
    }
        
    return minDiff;
}

function dfs(node, graph, visited) {
    visited[node] = true;
    
    let count = 1;
    for (const next of graph[node]) {
        if (!visited[next]) {
            count += dfs(next, graph, visited);
        }
    }
    
    return count;
}