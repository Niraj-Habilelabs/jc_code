let n=window.prompt()
let arr=[];

for(i=0;i<n;i++){
    const column = []
    for(j=0;j<n;j++){
        //         arr[i][j]=window.prompt();
        const input = window.prompt(`Row: ${i+1}, Column: ${j+1}`)
        column.push(input)
    }
    arr.push(column)
}
for(i=0;i<n;i++) {
    for(j=0;j<n;j++)
        console.log("arr1: ", arr[j][i]) 
}