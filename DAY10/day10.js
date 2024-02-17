var arrya = [1, 3,7,8, 5]
const newIndec = arrya.push(9)
console.log(newIndec, "newIndec")
console.log(arrya)

var array = [1, 2, 3]
array.pop()
console.log(array.pop())
console.log(array)


var array = [1, 2, 3]

array.unshift(5)
array.unshift(4)

console.log(array)


var array = [1, 2, 3]
const deletedPosition = array.shift()
console.log(deletedPosition,"deletedPosition")
array.shift()
console.log(array)

const array = ['a', 'b', 'c', 'd', "e"]

const ans = array.slice(2, 4);
console.log(ans)
 const ans = array.slice(1, 5);
 console.log(ans)
 const ans = array.slice(-4);
console.log(ans)
const ans = array.slice(1, -2);
 console.log(ans)



const array = ['a', 'b', 'c', 'd', 'e']

array.splice(1, 0, 'q')
console.log(array)

array.splice(4, 1, 'r')
console.log(array)



