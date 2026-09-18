function fibs (n) {

    let fib = [0,1];

    for (let index = 0; index < n -2; index++) {

        const element = fib[fib.length -1] + fib[fib.length-2]
        
        fib.push(element);
        
    }
    console.log(fib)
    return fib

}

fibs(1)