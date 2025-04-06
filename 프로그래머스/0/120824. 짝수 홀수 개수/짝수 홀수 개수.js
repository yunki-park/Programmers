function solution(num_list) {
    const evenCount = num_list.filter(num => num % 2 === 0).length;
    return [evenCount, num_list.length - evenCount];
}