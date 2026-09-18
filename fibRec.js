function fibsRec(n){

    if (n === 0) {
        return [0]
    }

    if(n === 1 ) {
        return [0,1]
    }

    let array = fibsRec(n -1)

    const nextNumber =
    
    array[array.length -1] +
    array[array.length -2];

    array.push(nextNumber);

    return array;

}

console.log(fibsRec(2));