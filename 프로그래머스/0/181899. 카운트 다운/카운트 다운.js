function solution(start_num, end_num) {
    const arr = Array(start_num - end_num + 1).fill(0);
    return arr.map((num, idx) => start_num - idx);
}