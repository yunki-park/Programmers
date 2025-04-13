// 개요
// 게임 보드의 빈칸(0)을 테이블의 퍼즐 조각(1)으로 정확히 끼워 넣어
// 퍼즐 조각의 총 채운 칸 수를 반환하는 문제
// 퍼즐은 회전 가능하고, 정확히 모양이 일치할 때만 끼울 수 있음

// 조건
// - 퍼즐은 서로 떨어져 있음 (인접 X)
// - 퍼즐은 회전 가능, 뒤집기는 불가능
// - 퍼즐은 빈칸과 정확히 일치해야 하며, 일부만 채우는 것은 안 됨

// 입력
// - game_board: 2차원 배열 (0: 빈칸, 1: 채운 칸)
// - table: 2차원 배열 (0: 빈칸, 1: 퍼즐 조각)

// 출력
// - 정수: 퍼즐로 채울 수 있는 총 칸 수

function solution(game_board, table) {
    const n = game_board.length; // 보드 크기
    const dx = [-1, 1, 0, 0]; // 방향 배열 (상하좌우)
    const dy = [0, 0, -1, 1];

    // 방문 여부 체크 배열
    const visitedBoard = Array.from({ length: n }, () => Array(n).fill(false));
    const visitedTable = Array.from({ length: n }, () => Array(n).fill(false));

    // 퍼즐 또는 빈 공간 추출용 BFS
    function bfs(x, y, board, visited, targetValue) {
        const queue = [[x, y]];
        const shape = [[0, 0]]; // 기준점 기준 상대 좌표
        visited[x][y] = true;

        while (queue.length > 0) {
            const [cx, cy] = queue.shift();

            for (let d = 0; d < 4; d++) {
                const nx = cx + dx[d];
                const ny = cy + dy[d];

                if (
                    nx >= 0 && nx < n &&
                    ny >= 0 && ny < n &&
                    !visited[nx][ny] &&
                    board[nx][ny] === targetValue
                ) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                    shape.push([nx - x, ny - y]); // 상대 좌표 저장
                }
            }
        }

        return normalize(shape); // 정규화 후 반환
    }

    // 퍼즐 회전 함수: 90도 시계 방향 회전 후 정규화
    function rotate(shape) {
        const rotated = shape.map(([x, y]) => [y, -x]);
        return normalize(rotated); // 회전 후 정규화
    }

    // 좌표 정규화 함수: (0, 0)을 기준으로 맞추고 정렬
    function normalize(shape) {
        const minX = Math.min(...shape.map(([x]) => x));
        const minY = Math.min(...shape.map(([, y]) => y));
        return shape
            .map(([x, y]) => [x - minX, y - minY])
            .sort((a, b) => (a[0] - b[0]) || (a[1] - b[1]));
    }

    // game_board에서 빈 공간(0) 모양 추출
    const emptySpaces = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!visitedBoard[i][j] && game_board[i][j] === 0) {
                const shape = bfs(i, j, game_board, visitedBoard, 0);
                emptySpaces.push(shape);
            }
        }
    }

    // table에서 퍼즐 조각(1) 모양 추출
    const puzzleBlocks = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!visitedTable[i][j] && table[i][j] === 1) {
                const shape = bfs(i, j, table, visitedTable, 1);
                puzzleBlocks.push(shape);
            }
        }
    }

    let answer = 0;
    const used = Array(puzzleBlocks.length).fill(false); // 사용된 퍼즐 체크

    // 빈칸마다 퍼즐 조각이 맞는지 확인
    for (const empty of emptySpaces) {
        let matched = false;

        for (let i = 0; i < puzzleBlocks.length; i++) {
            if (used[i]) continue;

            let block = puzzleBlocks[i];

            for (let r = 0; r < 4; r++) {
                if (
                    empty.length === block.length &&
                    JSON.stringify(empty) === JSON.stringify(block)
                ) {
                    used[i] = true;
                    answer += block.length;
                    matched = true;
                    break;
                }

                block = rotate(block); // 회전 후 다시 비교
            }

            if (matched) break; // 맞는 퍼즐 찾았으면 다음 빈칸으로
        }
    }

    return answer;
}
