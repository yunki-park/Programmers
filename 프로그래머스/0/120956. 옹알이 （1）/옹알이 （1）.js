function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    
    let count = 0;
    
    babbling.forEach(babble => {
        for (word of words) {
            // if (babble.includes(word)) {
                babble = babble.replace(word, " ");
            // }
        }
        
        babble = babble.replaceAll(" ", "");
        
        if (babble === "") {
            count++;
        }
    });
    
    return count;
}