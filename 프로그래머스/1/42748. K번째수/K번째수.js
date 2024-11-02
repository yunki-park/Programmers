function solution(array, commands) {
    var answer = [];
    
    for (const command of commands) {
        // 1. 범위 내 요소 자르기
        const tmpArray = array.slice(command[0] - 1, command[1]);
        console.log(tmpArray);
        // 2. 정렬 (sort 함수는 기본적으로 문자열 비교이므로 별도 비교 함수 작성)
        tmpArray.sort((a, b) => a - b);
        // console.log(tmpArray);
        // 3. n번째 요소 찾기
        const n = command[2];
        const nthElement = tmpArray[n - 1];
        // console.log(tmpArray);
        // 4. 결과 배열에 담기
        answer.push(nthElement);
    }
    
    return answer;
}