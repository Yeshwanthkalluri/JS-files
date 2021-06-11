function rowWithMax1s(mat) {
    
    let R = mat.length;
    let C = mat[0].length;
    let max_row_index = 0;
    let index=C-1;
  
    for (i=0; i<R; i++) {
        if (index >= 0 && mat[i][index]==1) {
            index-=1;
            max_row_index = i;
        }
    }
    if ((max_row_index == 0) && (mat[0][C-1] == 0)) {
        return 0;
    }
    return max_row_index;
} 
mat = [[0, 0, 0, 1], [0, 1, 1, 1], [1, 1, 1, 1], [0, 0, 0, 0]];
    
console.log(rowWithMax1s(mat));