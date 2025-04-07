function solution(nums) {
    const half = Math.floor(nums.length/2);
    const setSize = new Set(nums).size;
    
    return Math.min(half, setSize);
}