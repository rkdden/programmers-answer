function solution(food) {
    let answer = '0';
    for(let i = food.length - 1; 0 < i; i--) {
        const f = food[i];
        const iFood = Math.floor(f / 2)
        answer = `${i.toString().repeat(iFood)}${answer}${i.toString().repeat(iFood)}`
    }
    return answer;
}