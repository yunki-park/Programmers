function solution(videoLen, pos, opStart, opEnd, commands) {
    let curPos = convertToSec(pos);
    curPos = skipOpCommand(curPos, opStart, opEnd);
    
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
        
        curPos = skipOpCommand(curPos, opStart, opEnd);
    }
    
    return convertToTimeStr(curPos);
}
 
// 1. next command
function nextCommand(curPos, endPos) {
    return Math.min(curPos + 10, endPos);
}

// 2. prev command
function prevCommand(curPos) {
    return Math.max(curPos - 10, 0);
}

// 3. skip command
function skipOpCommand(curPos, opStart, opEnd) {
    return checkOp(curPos, opStart, opEnd) ? convertToSec(opEnd) : curPos;
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

function checkOp(curPos, opStart, opEnd) {
    const opStartPos = convertToSec(opStart);
    const opEndPos = convertToSec(opEnd);
    
    return opStartPos <= curPos && curPos <= opEndPos;
}