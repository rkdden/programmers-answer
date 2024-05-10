function solution(a, b, n) {
    let answer = 0;
    let emptyBottle = n;

    while(a <= emptyBottle) {
        const cola = Math.floor(emptyBottle / a);
        answer += cola * b;
        emptyBottle = emptyBottle % a;
        emptyBottle += cola * b;
    }

    return answer;
}
