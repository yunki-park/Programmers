function solution(priorities, location) {
    const pQueue = priorities.map((priority, idx) => ({ priority, idx }));
    
    let count = 0;
    while (pQueue.length > 0) {
        const current = pQueue.shift();
        
        const findTarget = pQueue.some(p => p.priority > current.priority);
        
        if (findTarget) {
            pQueue.push(current);
        } else {
            count++;
            if (current.idx == location) {
                break;
            }
        }
    }
    
    return count;
}