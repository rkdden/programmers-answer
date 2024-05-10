function solution(k, score) {
    let honorList = [];
    let result = [];

    for (let i = 0; i < score.length; i++) {
        honorList.push(score[i]);

        honorList.sort((a, b) => b - a);

        if (k < honorList.length) {
            honorList.pop();
        }

        result.push(honorList[honorList.length - 1]);
    }

    return result;
}
