// 개요
// 전화번호부에 적힌 전화번호 중 다른 번호의 접두어인 경우의 유무 확인

// 조건
// phone_book.length <= 10^6 (1~10^6)
// 1 <= phone number <= 20
// 중복 번호 없음

// 입력
// phone_book: 전화번호 문자열의 배열

// 출력
// Boolean, 다른 번호의 접두어인 케이스 존재 유무
// 주의) 해당 케이스 있으면 False, 없으면 True

function solution(phone_book) {
    let result = true;
    
    // 1. 전화번호 사전순 정렬
    phone_book.sort();
    
    // 2. 인접한 두 번호 비교하며 접두어 체크
    for (let i = 0; i < phone_book.length - 1; i++) {
        const a = phone_book[i];
        const b = phone_book[i + 1];
        
        if (b.startsWith(a)) {
            result = false;
            break;
        }
    }
    
    return result;
}