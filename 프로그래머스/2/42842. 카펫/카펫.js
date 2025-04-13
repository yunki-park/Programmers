// 개요
// 노란색, 갈색 타일 개수를 기억하는 상태에서 카펫 가로, 세로 구하기

// 조건
// 가로 >= 세로

// 입력
// brown: 정수 (8 ~ 5*10^3)
// yellow: 정수 (1 ~ 2*10^6)

// 출력
// [가로, 세로] 정수 배열

function solution(brown, yellow) {
    const resultSize = [0, 0]; // [w, h]
    
    // w * h = brown + yellow (w >= h)
    // h^2 <= brown + yellow
    // h <= sqrt(brown + yellow)
    //
    // (w - 2) * (h - 2) = yellow
    const size = brown + yellow;
    for (let height = 3; height <= Math.sqrt(size); height++) {
        if (size % height !== 0) {
            continue;
        }
        
        const width = size / height;
        if ((width -2) * (height - 2) === yellow) {
            resultSize[0] = width;
            resultSize[1] = height;
            break;
        }
    }

    return resultSize;
}