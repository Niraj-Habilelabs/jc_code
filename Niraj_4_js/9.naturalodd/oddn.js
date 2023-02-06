let n=window.prompt();
let sum=0;
let i;
if(n%2==0) {

    for(i=1;i<=2*n;i++) {
        if(i%2==1) {
            console.log(i);
            sum+=i;
        }
    }
    console.log(sum);
}
else {
    for(i=1;i<=2*n-1;i++) {
        if(i%2==1) {
            console.log(i);
            sum+=i;
        }
    }
    console.log("Sum ="+sum);
}