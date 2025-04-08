function solution(n, lost, reserve) {
    // 1. 중복 제거: 도난도 당했고 여벌도 가진 학생은 제외
    const actualLost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
    const actualReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);

    // 2. 여벌 체육복을 앞 또는 뒤 학생에게 빌려주기
    for (let student of actualReserve) {
        const beforeIndex = actualLost.indexOf(student - 1);
        const afterIndex = actualLost.indexOf(student + 1);

        if (beforeIndex !== -1) {
            actualLost.splice(beforeIndex, 1);
        } else if (afterIndex !== -1) {
            actualLost.splice(afterIndex, 1);
        }
    }

    // 3. 전체 학생 수 - 체육복 없는 학생 수
    return n - actualLost.length;
}
