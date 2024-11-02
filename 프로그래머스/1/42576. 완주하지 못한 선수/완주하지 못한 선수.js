function solution(participant, completion) {
    const completionSet = new Set(completion);
    const uniquePerson = participant.find(item => !completionSet.has(item));

    if (!uniquePerson) {
        return refind(participant, completion);
    }
    return uniquePerson;
}

function refind(participant, completion) {
    const countMap = new Map();

    // construct countMap
    participant.forEach(name => {
        countMap.set(name, (countMap.get(name) ?? 0) + 1);
    })

    // update countMap
    completion.forEach(name => {
        countMap.set(name, countMap.get(name) - 1);
    });

    // find not 0 element
    for (const [name, count] of countMap.entries()) {
        if (count) {
            return name;
        }
    }
}