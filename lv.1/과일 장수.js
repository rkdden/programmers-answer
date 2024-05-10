function solution(k, m, score) {
    const sortedAppleList = score.sort((a,b) => b - a);
    const appleBoxList = [];
    for(let i = 0; i < sortedAppleList.length; i += m) {
        const t = sortedAppleList.slice(i, i+m);
        appleBoxList.push(t)
    }
    const cList = appleBoxList.map((appleBox) => {
        if(appleBox.length < m) {
            return 0;
        }
        return Math.min(...appleBox) * m
    })

    return cList.reduce((acc, cur) => {
        return acc + cur
    }, 0)
}
