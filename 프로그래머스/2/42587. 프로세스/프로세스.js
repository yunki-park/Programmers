// 개요
// 우선 순위 기반으로 프로세스 실행 시, 특정 프로세스의 실행 순서 구하기

// 조건
// priorities.length <= 100 (priority: 1~9, 숫자 큰 게 우선순위 높음)
// location: 0 ~ ("대기 큐" 크기 - 1), index 기반

// 입력
// 배열, 작업들의 우선 순위가 담긴 priorities
// 정수, 실행 순서를 알고 싶은 프로세스의 index

// 출력
// 정수, 해당 프로세스가 실행되는 순서


function solution(priorities, location) {
    let count = 0;
    
    const queue = priorities.map((priority, index) => ({ index, priority }));
    console.log(queue);
    
    while (queue.length) {
        const cur = queue.shift();
        
        if (queue.some(process => process.priority > cur.priority)) {
            queue.push(cur); // [1, 3, 2, 2], [3, 2, 1, 1]
        } else {
            count++; // 1
            if (cur.index === location) {
                break;
            }
        }
    }
    
    return count;
}