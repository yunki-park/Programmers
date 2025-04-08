function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n;
    let answer = right;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        // {mid}분 동안 처리 가능한 인원 계산
        const people = times.reduce((p, time) => p + Math.floor(mid / time), 0);
        // console.log(mid, people);
        
        if (people >= n) {
            right = mid - 1;
            answer = mid;
        } else {
            left = mid +1;
        }
    }
    
    return answer;
}