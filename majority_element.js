function printMajority(a, size) {
    let cand = findCandidate(a, size);
    if (isMajority(a, size, cand))
        console.log(" " + cand + " ");
    else
        console.log("No Majority Element");
    }
  
function findCandidate(a, size) {
    let maj_index = 0, count = 1;
    let i;
    for (i = 1; i < size; i++) {
        if (a[maj_index] == a[i])
            count++;
        else
            count--;
        if (count == 0) {
            maj_index = i;
            count = 1;
        }
    }
    return a[maj_index];
}

function isMajority(a, size, cand){
    let i, count = 0;
    for (i = 0; i < size; i++) {
        if (a[i] == cand)
            count++;
    }
    if (count > parseInt(size / 2, 10))
        return true;
    else
        return false;
}
     
let a = [ 3, 3, 4, 2, 4, 4, 2, 4, 4];
let size = a.length;
 
    // Function call
    printMajority(a, size);