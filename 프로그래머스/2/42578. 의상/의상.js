// 개요
// 의상들이 분류되어 주어질 때, 하루에 입을 수 있는 의상 조합의 수 구하기

// 조건
// 하루에 최소 하나의 의상은 입어야 함
// 1 <= clothes.length <= 30
// 의상 이름 중복 X
// 의상 이름 및 의상 종류는 알파벳 소문자 또는 '_' 조합

// 입력
// clothes: 2차원 배열, [의상 이름, 의상 종류] 배열

// 출력
// 정수, 의상 조합 수

function solution(clothes) {
    let totalCount = 1;
    
    const map = new Map();
    
    // 1. 의상 종류 별로 분류 및 종류 별 개수 카운팅
    for (const [name, type] of clothes) {
        map.set(type, (map.get(type) || 0) + 1);
    }
    console.log(map);

    // 2. 의상 조합 계산
    for (const [name, count] of map) {
        totalCount *= (count + 1); 
    }
    
    // 3. 아무 것도 입지 않은 경우 1가지 제외
    totalCount -= 1;
    
    return totalCount;
}