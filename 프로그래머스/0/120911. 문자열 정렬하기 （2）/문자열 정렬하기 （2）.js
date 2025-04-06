function solution(my_string) {
    const lowerCase = my_string.toLowerCase();
    
    return [...lowerCase].sort().join('');
}