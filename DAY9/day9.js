setTimeout(() => {
       console.log("Excuted after 2000 msce.")
    console.log("Excuted after 2000 msce.")
    console.log("Excuted after 2000 msce.")
},5000);


const myInterval = setInterval(() => { console.log("Excuting after every 2 sec..") }, 2000)

 function StopInterval() {
    clearInterval(myInterval)
 }

 setTimeout(StopInterval, 5000)


console.log("1")
setTimeout(() => { console.log("2") }, 3000)
console.log("3")
setTimeout(() => { console.log("4") }, 1000)
console.log("5")


 //event loop
 console.log(1)
setTimeout(()=>{console.log(2)}, 0)
console.log(3)
 setTimeout(()=>{console.log(4)}, 2000)



var array = [1, 2, 3, 4, 5, 6]

const indec = array.findIndex((abc) => abc == 7)

console.log(indec)

 var array = [1, 8, 2, 3, 4, 5, 6]

 const answer = array.find((number) => number > 5)
console.log(answer)


var array = [1, 8, 2, 3, 4, 5, 6]
const result = array.map((num) => num > 5)
console.log(result)



var array = [1, 6, 8, 2, 3, 4, 5, 6]
array.forEach((number) => {
    if (number > 5) {
        console.log(number)
    }
})


    