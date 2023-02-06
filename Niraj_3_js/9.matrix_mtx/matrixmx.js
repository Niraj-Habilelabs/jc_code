function multiply(arr1, arr2) {
    // res=[]
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++){
                res += arr1[i][k] * arr2[k][j];
                console.log(res);
            }
            
        } 
    }
}
let n = window.prompt("Enter the dimension of the matrix");
let arr1 = [];
let arr2 = [];
let res = [];
let j = 0, t = 0;

for (i = 0; i < n; i++) {
    const column = []
    for (j = 0; j < n; j++) {
        const input = window.prompt(`Row: ${i + 1}, Column: ${j + 1}`)
        column.push(input)
    }
    arr1.push(column)
}
for (i = 0; i < n; i++) {
    const column = []
    for (j = 0; j < n; j++) {
        const input = window.prompt(`Row: ${i + 1}, Column: ${j + 1}`)
        column.push(input)
    }
    arr2.push(column)
}
multiply(arr1, arr2);
