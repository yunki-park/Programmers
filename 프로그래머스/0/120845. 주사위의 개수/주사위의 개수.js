function solution(box, n) {
    const [x, y , z] = box;
    
    const xNum = Math.floor(x / n);
    const yNum = Math.floor(y / n);
    const zNum = Math.floor(z / n);
    
    return xNum * yNum * zNum;
}