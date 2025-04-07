function solution(start_num, end_num) {
    var answer = Array(end_num - start_num + 1).fill(0);
    return answer.map((num, idx) => start_num + idx);
}