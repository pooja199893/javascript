//var myobject = { name:"wqerr",surname:"asdf",age:30,student:["p","q"]}
//myobject{}
//console.log(myobject.name)
//console.log(myobject.surname)
//console.log(myobject.age)
//console.log(myobject.student)
//myobject["xyz"]="xyz"
//console.log(myobject)

// Q Find unique numbers,  1 , 2,  3, 4, 5

//var array = [1, 2, 1, 3, 4, 5, 2, 3, 5];
//var myAnswer = {}

//for (var i = 0; i < array.length; i++) {
    // console.log(myAnswer[array[i]])
  //  if (myAnswer[array[i]] === undefined) {
    //    myAnswer[array[i]] = 1
      //  console.log(array[i])
    //}
//}







// Q Find count of unique numbers,  1 , 2,  3, 4, 5

//var array = [1, 2, 1, 3, 4, 5, 2, 3, 5, 1];
//var myAnswer = {}

//for (var i = 0; i < array.length; i++) {
    // console.log(myAnswer[array[i]])
  //  if (myAnswer[array[i]] === undefined) {
      //  myAnswer[array[i]] = 1
    //} else {
        ///myAnswer[array[i]]++
    //}

//}

//console.log(myAnswer)



var array = [1, 2, 1, 3, 4, 5, 2, 3, 5, 1];
var myAnswer = {}
var array = [1, 2, 1, 3, 4, 5, 2, 3, 5];
var unique = [];

function isPrime(n){
    for (var i=2; i<=n; i++){
        if(n%i===0){
            return false
        }
        return n>1
    }
}
for (var j=0; j<array.length;j++){
    if(unique[array[j]]===undefined && (unique[array[j]]=1) && (isPrime(array[j]))){
        console.log(array[j])
    }
}
   