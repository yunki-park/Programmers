function solution(rsp) {
    const win = {
        '2': '0',
        '0': '5',
        '5': '2'
    }
    
    return [...rsp].map(i => win[i]).join('');
}