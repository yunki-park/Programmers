function solution(n, control) {
    for (let char of control) {
        if (char === 'w') n += 1;
        else if (char === 's') n -= 1;
        else if (char === 'd') n += 10;
        else if (char === 'a') n -= 10;
    }
    return n;
}