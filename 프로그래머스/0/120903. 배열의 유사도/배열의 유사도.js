function solution(s1, s2) {
    const set2 = new Set(s2);
    return s1.filter(item => set2.has(item)).length;
}