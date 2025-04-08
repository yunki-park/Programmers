function solution(s) {
    const lc = s.toLowerCase().split("");
    const pCount = lc.filter(c => c === 'p').length;
    const yCount = lc.filter(c => c === 'y').length;
    
    return pCount === yCount ? true : false;
}