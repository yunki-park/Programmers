function solution(num_list) {
    const length = num_list.length;
    const last1 = num_list[length - 1];
    const last2 = num_list[length - 2];
    
    if (last1 > last2) {
        return [...num_list, last1 - last2];
    }
    
    return [...num_list, last1 * 2];
}