function solution(s) {
    const answer = [];
    const stringList = [...s];
    const obj = {};
    for (let i = 0; i < stringList.length; i++) {
        const str = stringList[i];
        if (obj[str] !== undefined) {
            answer.push(i - obj[str]);
            obj[str] = i;
        } else {
            answer.push(-1);
            obj[str] = i;
        }
    }
    console.log(answer);
    return answer;
}