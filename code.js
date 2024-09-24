function fib(n) {
    if (n === 0) {
        return [0];
    } else if (n === 1) {
        return [0, 1];
    } else {
        var arr = fib(n - 1);
        arr.push(arr[i - 2] + arr[i - 1]);
        return arr;
    } 
    return n;
}
