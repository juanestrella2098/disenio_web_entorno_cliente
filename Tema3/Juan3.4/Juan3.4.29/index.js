const numerosPares = {
    [Symbol.iterator]() {
        let actual = 0;
        return {
            next() {
                actual += 2;
                return { value: actual, done: false }
            }
        }
    }
}

for (const num of numerosPares) {
    if (num > 30) break;
    console.log(num);
}