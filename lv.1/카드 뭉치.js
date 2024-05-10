function solution(cards1, cards2, goal) {
    let answer = "Yes";
    let temp1 = 0;
    let temp2 = 0;

    for(let i = 0; i < goal.length; i++) {
        const g = goal[i];
        if(cards1[temp1] === g) {
            temp1++;
            continue;
        }else if(cards2[temp2] === g) {
            temp2++;
            continue;
        }else {
            answer = "No";
            break;
        }
    }
    return answer;
}