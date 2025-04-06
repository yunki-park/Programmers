function solution(arr, delete_list) {
    const result = arr.filter(e => !delete_list.includes(e));
    
    return result;
}