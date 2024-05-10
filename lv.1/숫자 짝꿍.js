const s = (a,b) => a - b;

function solution(X, Y) {
    const xList = [...X].map(t => Number(t)).sort(s);
    const yList = [...Y].map(t => Number(t)).sort(s);

    const xArr = new Array(10).fill(0);
    const yArr = new Array(10).fill(0);

    for(let i = 0; i < xList.length; i++) {
        const x = xList[i];
        xArr[x]++;
    }

    for(let i = 0; i < yList.length; i++) {
        const y = yList[i];
        yArr[y]++;
    }

    const temp = [];
    for(let i=0; i<10; i++) {
        const x = xArr[i];
        const y = yArr[i];

        if(x === 0 || y === 0) {
            continue;
        }else if(x < y) {
            for(let j = 0; j < x; j++) {
                temp.push(i);
            }
        }else if(y < x) {
            for(let j = 0; j < y; j++) {
                temp.push(i);
            }
        }else {
            for(let j = 0; j < x; j++) {
                temp.push(i);
            }
        }

    }

    let result = 0;

    const isAllZero = temp.length > 0 && temp.every(item => item === 0);

    if(isAllZero) {
        result =  "0"
    }else {
        result = temp.length > 0 ? temp.sort((a, b) => b - a).join('') : "-1"
    }

    return result;

}