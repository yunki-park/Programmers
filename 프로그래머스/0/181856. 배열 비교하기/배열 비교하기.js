function solution(arr1, arr2) {
    const length1 = arr1.length;
    const length2 = arr2.length;
    
    if (length1 > length2) {
        return 1;
    }
    
    if (length1 < length2) {
        return -1;
    }
    
    const sum1 = arr1.reduce((sum, num) => sum + num, 0);
    const sum2 = arr2.reduce((sum, num) => sum + num, 0);
    
    return sum1 > sum2 ? 1
    : sum1 < sum2 ? -1
    : 0;
}