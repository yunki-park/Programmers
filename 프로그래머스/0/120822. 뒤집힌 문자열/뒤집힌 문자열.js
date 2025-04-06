function solution(my_string) {
    // 0. 문자열 -> 문자 배열
    const arr = my_string.split('');
    // 1. 배열 뒤집기
    const rArr = arr.reverse();
    // 2. 문자 배열 -> 문자열
    return rArr.join('');
}