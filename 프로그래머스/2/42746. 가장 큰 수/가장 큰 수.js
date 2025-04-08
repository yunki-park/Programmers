function solution(numbers) {
    const sorted = numbers.map(String).sort((a, b) => (b + a) - (a + b));
    const answer = sorted.join('');
    
    return answer[0] === '0' ? '0' : answer;
}