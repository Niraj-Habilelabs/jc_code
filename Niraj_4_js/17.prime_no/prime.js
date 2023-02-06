function isprm(n){
    let=c=0;
    for(var i=1;i<=n;i++) {
        if(n%i==0){
            c++;
        }
    }
    if(c==2)
        return n;
}
for(j=1;j<=100;j++) {
    console.log(isprm(j));
}

