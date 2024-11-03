function solution(progresses, speeds) {
    const answer = [1];
    
    const days = Array(progresses.length).fill().map((v, i) => {
        const progress = progresses[i];
        const speed = speeds[i];
        
        return Math.ceil((100 - progress) / speed);
    });
    // console.log(days)
    
    let tmpValue = days[0];
    for (let i = 1; i < days.length; i++) {
        if (tmpValue >= days[i]) {
            answer[answer.length-1] += 1;
        } else {
            answer.push(1);
            tmpValue = days[i];
        }
    }
    
    return answer;
}
// 7 3 / 9
// 5 / 10 1 1 / 20 1