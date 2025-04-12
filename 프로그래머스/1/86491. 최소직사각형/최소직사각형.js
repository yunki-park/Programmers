// 개요
// 여러 크기의 명함들을 수납할 수 있는 최소 크기 지갑 크기 구하기

// 조건
// sizes.length <= 10^4 (1 ~ 10^4)
// sizes: [w, h] (1 <= w, h <= 10^3)

// 입력
// sizes: 배열, 각 명함의 [w, h]

// 출력
// 정수, 지갑 크기 (넓이)

function solution(sizes) {
    const widths = [];
    const heights = [];
    
    for (const size of sizes) {
        widths.push(Math.max(size[0], size[1]));
        heights.push(Math.min(size[0], size[1]));
    }
    
    widths.sort((a, b) => b - a);
    heights.sort((a, b) => b - a);
    
    return widths[0] * heights[0];
}