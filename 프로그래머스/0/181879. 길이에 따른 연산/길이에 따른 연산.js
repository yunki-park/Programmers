function solution(num_list) {
    const length = num_list.length;

    if (length > 10) {
       return num_list.reduce((result, num) => result + num, 0);        
    }
    
    return num_list.reduce((result, num) => result * num, 1);
}