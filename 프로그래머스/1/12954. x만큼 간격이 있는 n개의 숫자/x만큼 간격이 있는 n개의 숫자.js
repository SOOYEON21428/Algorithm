function solution(x, n) {
    var answer = [];
    for (var i = 0; i < n; i++) {
        answer.push(x + x * i);
    }
    return answer;
}
