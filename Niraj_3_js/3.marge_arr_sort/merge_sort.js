let n=window.prompt();
let arr1=[];
let arr2=[];
let arrm=[];
let j=0,t=0;
for(i=0;i<n;i++) 
    arr1[i]=window.prompt();
for(i=0;i<n;i++)
    arr2[i]=window.prompt();
    
for(i=0;i<n;i++) {
    arrm[j]=arr1[i];
    j++;
    arrm[j]=arr2[i];
    j++;
}
//123
for(j=0;j<arrm.length;j++) {
    for(k=0;k<arrm.length;k++) {
        if(arrm[j]<arrm[k]){
            t=arrm[j];
            arrm[j]=arrm[k];
            arrm[k]=t;
        }

    }
}

for(j=0;j<arrm.length;j++) 
    console.log(arrm[j]);

