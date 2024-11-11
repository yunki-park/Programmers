function solution(videoLen, pos, opStart, opEnd, commands) {
    let curPos = convertToSec(pos);
    if (checkOpening(curPos, opStart, opEnd)) {
        curPos = convertToSec(opEnd);
    }
    
    const endPos = convertToSec(videoLen);
    
    for (const command of commands) {
        if(command === "next") {
            curPos = nextCommand(curPos, endPos);
            console.log(convertToTimeStr(curPos));
        } else {
            // command === "prev"
            console.log(convertToTimeStr(curPos));
            curPos = prevCommand(curPos);
            console.log(convertToTimeStr(curPos));
        }
        
        if (checkOpening(curPos, opStart, opEnd)) {
            curPos = convertToSec(opEnd);
        }
    }
    
    return convertToTimeStr(curPos);
}
    
function nextCommand(curPos, endPos) {
    return Math.min(curPos + 10, endPos);
}

function prevCommand(curPos) {
    return Math.max(curPos - 10, 0);
}

function convertToSec(timeStr) {
    const [m, s] = timeStr.split(":").map(Number);
    return 60 * m + s;
}
    
function convertToTimeStr(seconds) {
    const m = String(Math.trunc(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    
    return `${m}:${s}`;
}

function checkOpening(curPos, opStart, opEnd) {
    const opStartPos = convertToSec(opStart);
    const opEndPos = convertToSec(opEnd);
    
    return opStartPos <= curPos && curPos <= opEndPos;
}