function solution(sizes) {
    const widths = [];
    const heights = [];
    
    for (const size of sizes) {
        widths.push(Math.max(size[0], size[1]));
        heights.push(Math.min(size[0], size[1]));
    }
    widths.sort((a, b) => b - a);
    heights.sort((a, b) => b - a);
    
    return widths[0] * heights[0];
}