// 개요
// 정해진 순서의 트럭 여러 대가 무게 제한, 길이가 주어진 일차선 다리를 건널 때
// 모든 트럭이 다리를 건너는 데 걸리는 최소 시간 구하기

// 조건
// birdge_length <= 10^4 (트럭이 올라갈 수 있는 대수)
// 트럭 길이 1??
// weight 1~10^4 정수
// 트럭 무게 truck_weights.length < 10^4
// 트럭 무게 1 ~ weight 정수

// 입력
// bridge_length: 다리 길이, 정수
// weight: 다리 하중, 정수
// truck_weights: 각 트럭 무게, 정수 배열

// 출력
// 모든 트럭이 지나는 최소 시간, 정수

function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let curWeight = 0;
    
    // 1. 다리 각 위치에 대한 하중 배열 관리
    // [0, 0]
    const bridge = Array.from({ length: bridge_length }, () => 0);
    // console.log(bridges);
    
    // 모든 트럭이 지나갈 때까지 계산 (트럭 대수 = 0 and 다리 하중 = 0)
    while (!(truck_weights.length === 0 && curWeight === 0)) {
        // 2. 매초 트럭 이동
        // 하중 가능 여부 체크 후 새 트럭 출발
        // 하중 정보 기록
        time++;

        curWeight = curWeight - bridge.shift();
        
        const truckWeight = truck_weights[0];
        if (curWeight + truckWeight <= weight) {
            curWeight += truckWeight;
            bridge.push(truck_weights.shift());
        } else {
            bridge.push(0);
        }
    }
        
    return time;
}