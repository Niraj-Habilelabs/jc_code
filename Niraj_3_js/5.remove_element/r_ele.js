let n=window.prompt();
let arr1=[];
for(i=0;i<n;i++) 
    arr1[i]=window.prompt();
let key=window.prompt();    
for(i=0;i<n;i++) {
    if(arr1[i]!=key)
        console.log(arr1[i]);
}

