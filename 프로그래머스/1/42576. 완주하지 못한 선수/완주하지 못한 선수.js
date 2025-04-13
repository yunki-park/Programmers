// 개요
// 마라톤에 참여한 선수 중 완주하지 못한 한 명의 선수 찾기

// 조건
// 1 <= participant.lenth <= 10^5
// completion.length = participant.length - 1
// 동명이인 존재

// 입력
// participant: 문자열 배열, 참여자 목록
// completion: 문자열 배열, 완주자 목록

// 출력
// 문자열, 완주하지 못한 선수 이름

function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for (let i = 0; i < completion.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
    
    return participant[participant.length - 1];
}