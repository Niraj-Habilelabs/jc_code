let n=window.prompt();
let arr=[];
for(i=0;i<n;i++) 
    arr[i]=window.prompt();
for(var j=0;j<n;j++) {
    for( var k=0;k<n;k++) {
        if(arr[j]<arr[k]){
            t=arr[j];
            arr[j]=arr[k];
            arr[k]=t;
        }

    }
}

for(j=0;j<arr.length;j++) 
    console.log(arr[0]+arr[n-1]);

