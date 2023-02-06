let num=window.prompt();
sum=0;
while(num!=0) {
    //sum+=num%10;
    var d=num%10;
    sum=sum+d;
    num=num/10;

}
console.log(sum);