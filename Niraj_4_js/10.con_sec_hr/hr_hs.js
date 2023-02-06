let sec=window.prompt();
console.log("h :"+(sec/3600));
//console.log("h :"+Number(sec/3600));
sec=sec%3600;
console.log("m :"+(sec/60));
sec=sec%60;
console.log("s :"+sec);