function solution(brown, yellow) {
    // const yWidth, yHeight;
    // const yellow = yWidth * yHeight;
    // const yHeight = yellow / yWidth;
    // const brown = 4 + 2 * (yWidth + yellow / yWidth);
    // 2 * yWidth * yWidth - (brown - 4) * yWidth + 2 * yellow = 0;
    
    const a = 2;
    const b = 4 - brown;
    const c = 2 * yellow;
    const discriminant = b * b - 4 * a * c;
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    const yWidth = Math.max(root1, root2);
    const yHeight = Math.min(root1, root2);
    
    // console.log(root1, root2);
    
    return [yWidth + 2, yHeight + 2];
}