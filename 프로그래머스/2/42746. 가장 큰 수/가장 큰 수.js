function solution(numbers) {
    let answer = '';
    
    // 1. number -> string 변환하여 새 배열 생성
    const numberStrs = numbers.map(number => number.toString());
    // console.log(numberStrs);
    
    // 2. 기준 함수에 따라 정렬
    numberStrs.sort((a, b) => (b + a) - (a + b));
    // console.log(numberStrs);
    
    // 3. 문자열 합친 형태로 변환
    for (const str of numberStrs) {
        answer += str;
    }
    
    return answer[0] === '0' ? '0' : answer;
}