function solution(my_string) {
    return [...my_string].map(char => {
        return char === char.toUpperCase()
        ? char.toLowerCase()
        : char.toUpperCase();
    }).join('');
}