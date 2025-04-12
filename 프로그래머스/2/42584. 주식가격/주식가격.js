// 개요
// 주식 가격이 초 단위로 기록된 배열이 주어질 때, 가격이 떨어지지 않은 기간 구하기

// 조건
// prices <= 10^4 (1 ~ 10^4)
// prices.length < 10^5 (2 ~ 10^5)

// 입력
// prices: 정수 배열

// 출력
// 배열, 각 가격이 떨어지지 않은 시간

// O(N^2)
function solution(prices) {
    const timeArray = [];
    
    for (let i = 0; i < prices.length - 1; i++) {
        let count = 1;
        
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] <= prices[j] && j !== prices.length - 1) {
                count++;
            } else {
                break;
            }
        }
        timeArray.push(count);
    }
    timeArray.push(0);
    
    return timeArray;
}