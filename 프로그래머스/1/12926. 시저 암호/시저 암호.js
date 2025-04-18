function solution(s, n) {
    return s.split('').map(char => {
        if (char === ' ') return ' '; 
        const code = char.charCodeAt(0); 
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + n) % 26) + 65);
        }

        if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + n) % 26) + 97);
        }

        return char;
    }).join('');
}
