let n=window.prompt();
let avg=0;
let arr=[];
for(i=0;i<n;i++) {
    arr[i]=window.prompt();
//for(i=0;i<n;i++)
    avg+=arr[i];
}
console.log(avg/n);

// my code is true but i'm not achive my desire output
// text case for :-
// input:-
//   n=4
//   arr[8,8,8,8]
//   output At console:-
//   2222