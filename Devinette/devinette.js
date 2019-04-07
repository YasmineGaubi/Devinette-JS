var rep=0;
var r=Math.floor(Math.random()*100)+1;
do{
  var x=Number(prompt('Entrer un entier:'));
   if(!isNoN(x)){

     if (x==r) {
        console.log('Bravo!');
     }
     else if(x>r){
         console.log(r,'asgher men',x);
     } else if(x<r){
         console.log(r,'akber men',x);
     }
   }
    rep++;
}while((x!=r) && (rep<8)); 