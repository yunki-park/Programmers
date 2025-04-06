function solution(n) {
    const numArr = [...n.toString()].map(Number)
    return numArr.reduce((acc, cur) => acc + cur, 0);
}