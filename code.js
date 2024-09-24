function fib(n) {
    if (n === 0) {
        return [0];
    } 
    else if (n === 1) {
        return [0,1];
    } 
    else if (n === 2) {
        return [0,1,1];
    } 
    else {
        var arr = fib(n -1);
        arr.push(arr[n - 2] + arr[n - 1]);
        return arr;
    } 
    
    return n;
}
