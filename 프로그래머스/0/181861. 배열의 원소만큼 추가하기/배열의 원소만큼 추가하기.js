function solution(arr) {
    const result = [];
    
    arr.forEach(num => {
        result.push(...Array(num).fill(num))
    });
    
    return result;
}