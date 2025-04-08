function solution(numbers, target) {
    let count = 0;
    
    function dfs(index, sum) {
        if (index === numbers.length) {
            // check sum
            if (sum === target) {
                count++;
            }
            return;
        }

        // 두 갈래로 뻗어나가기
        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }   
    
    dfs(0, 0);
    
    return count;
}