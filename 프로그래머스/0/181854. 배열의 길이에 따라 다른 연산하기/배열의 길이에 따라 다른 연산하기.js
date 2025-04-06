function solution(arr, n) {
    const isEven = arr.length % 2 === 0;
    
    if (isEven) {
        return arr.map((val, idx) => {
            return idx % 2 === 1 ? val + n : val;
        });
    }
    
    return arr.map((val, idx) => {
        return idx % 2 === 0 ? val + n : val;
    });
}