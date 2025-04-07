function solution(n, lost, reserve) {
    const zero = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
    const two = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);
    
    for (let t of two) {
        const before = zero.indexOf(t - 1);
        const after = zero.indexOf(t + 1);
        
        if (before !== -1) {
            zero.splice(before, 1);
        } else if (after !== -1) {
            zero.splice(after, 1);
        }
    }
    
    return n - zero.length;
}