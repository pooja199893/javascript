var mypalindrom = "15431"
 function isstringpali(string){
    for(var i = 0; i < Math.floor(string.length / 2); i++){
        console.log(string[i],string[string.length -1 -i ])
         if(string[i]!=string[string.length -1 -i ]){
            return "Not Palindrom"

        }
    }
    return"Its a Palindrom"
 }
 console.log(isstringpali(mypalindrom))
 
 