function solution(arr)
{
    const answer = [];
    
    for (const item of arr) {
        const answerTop = answer[answer.length - 1];
        
        if (answerTop !== item) {
            answer.push(item);
        }
    }
    
    return answer;
}