function solution(num_list) {
    const result = [0, 0];
    num_list.forEach(num => result[num%2]++);
    return result;
}