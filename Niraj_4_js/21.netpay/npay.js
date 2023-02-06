let bpay=window.prompt();
let ta;

let da;
let hra;
let pf;
let netpay=0;
if(bpay>=2000 && bpay<=30000) {
    if(bpay<=5000) {
        ta=bpay*2.5/100;
        da=bpay*3.5/100;
        hra=bpay*5/100;
        pf=bpay*3.6/100;

    }
    else if(bpay>5000 && bpay<=10000) {
        ta=bpay*3.8/100;
        da=bpay*5.5/100;
        hra=bpay*8/100;
        pf=bpay*7.3/100;
    }
    else if(bpay>10000 && bpay<=15000) {
        ta=bpay*4.5/100;
        da=bpay*6.5/100;
        hra=bpay*10/100;
        pf=bpay*9.5/100;
    }
    else if(bpay>15000 && bpay<=20000) {
        ta=bpay*6.5/100;
        da=bpay*8.5/100;
        hra=bpay*12/100;
        pf=bpay*12.5/100;
    }
    else {
   // else if(bpay>20000) {
        ta=bpay*7.5/100;
        da=bpay*9.5/100;
        hra=bpay*15/100;
        pf=bpay*13/100;

    }
    netpay= bpay+ta+da+hra-pf;       
console.log(netpay);        
}
else
    console.log("your data is invalid..! please your enter your bpay(Basic pay) in the range of 2000 - 30000!!!.. ");

