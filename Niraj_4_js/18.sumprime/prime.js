function isprm(n){
    let=c=0;
    for(var i=1;i<=n;i++) {
        if(n%i==0){
            c++;
        }
    }
    if(c==2){
        cout++;
      //  sum=sum+n;
        return n;
    }
}
// function coutprm(n) {
//     let c=0;
//     for(var i=1;i<n/2;i++) {
//         if(n%i==0){
//             c++;
//         }
//     }
//     return c==1;
// }
var cout=0;
var sum=0;
for(j=1;j<=1000;j++) {
    sum+=isprm(j)
    if(cout==100)
        break;
        

}
console.log(sum);


