function arms(n){
    let c=0;
    while(n!=0) {
        c++;
        n/=10;
    }
    return c;
}
for(i=1;i<=1000;i++) {
    let d=0;
    let m=arms(i);
    let ans=1;
    while(i!=0) {
        d=i%10;
        for(k=1;k<=m;k++){
            ans*=d;
        }
        i/=10;

    }
    console.log(ans);
}