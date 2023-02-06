let n=window.prompt("Enter the dimension of the matrix");
let arr1=[];
let arr2=[];
let arrm=[];
let j=0,t=0;

for(i=0;i<n;i++){
    const column = []
    for(j=0;j<n;j++){
        const input = window.prompt(`Row: ${i+1}, Column: ${j+1}`)
        column.push(input)
    }
    arr1.push(column)
}

console.log("arr1: ", arr1[0][1])
for(i=0;i<n;i++){
    const column = []
    for(j=0;j<n;j++){
        //         arr[i][j]=window.prompt();
        const input = window.prompt(`Row: ${i+1}, Column: ${j+1}`)
        column.push(input)
    }
    arr2.push(column)
}

for(i=0;i<n;i++) {
    for(j=0;j<n;j++){
       console.log(arrm=(arr1[i][j]+arr2[i][j]))
    }
}




