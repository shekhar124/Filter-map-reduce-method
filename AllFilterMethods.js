const number = [1,2,3,4,5,6];
const filterM = number.filter(n => n%2==0);
console.log("Filter Method print even numbers : "+filterM);  //even numbers 2,4,6


const mapM = filterM.map(n=>n*2);
console.log("Map method: "+mapM) ;

const fe = mapM.forEach(n=>{
console.log( "for each loop  :"+n)
});

const red = number.reduce((a,a1)=>a+a1); //1+2=3,3+3=6,6+4=10
console.log("Reduce method  : "+red);






