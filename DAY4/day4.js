// var today = new Date;
// console.log(today.getDate())
//console.log(today.getHours())
//console.log(today.getTime())
//console.log(today.getDay())

switch (20) {
   case 10:
      console.Log("10")
      break;
   case 20:
      console.log("20")
      break;
   default:
      console.log("10 nor 20")
      break;
}

 for(var i=1;i<=20;i++){
   if(i % 2 == 0){
   console.log(i,"-EVEN")
   } else {
    console.log(i,"-ODD")
   }
}


 var sum = 0
 for(var i=10; i<=30; i++){
    if(i % 2 != 0){
       sum += i ;
    }
 }
 console.log(sum)