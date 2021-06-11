function gcd( a, b){
    if (b == 0)
        return a;
    else
        return gcd(b, a % b);
}
 
function leftRotate(arr, d, n){
    d = d % n;
    let GCD = gcd(d, n);
    for (let i = 0; i < GCD; i++) {
        let temp = arr[i];
        let j = i;
        while (1) {
            let k = j + d;
            if (k >= n)
                k = k - n;
            if (k == i)
                break;
            arr[j] = arr[k];
            j = k;
        }
        arr[j] = temp;
    }
}
 
function printArray(arr, size){
    for (let i = 0; i < size; i++)
        console.log(arr[i]);
}
let arr = [ 1, 2, 3, 4, 5 ];
let n = arr.length;
leftRotate(arr, 2, n);
printArray(arr, n);