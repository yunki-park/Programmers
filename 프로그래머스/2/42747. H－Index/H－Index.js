function solution(citations) {
    let answer = 0;
    
    citations.sort((a, b) => a - b);
    for (let i = 0; i < citations.length; i++) {
        const h1 = citations[i];
        const h2 = citations.filter(num => num >= h1).length;
        const currentH = Math.min(h1, h2);
        answer = Math.max(answer, currentH);
    }

    return answer;
}