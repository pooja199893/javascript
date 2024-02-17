 var name = "radha";
 var age = 5;


 console.log("Welcome", name)
 console.log(`Welcome ${name} and your age ${age}`)



 var array1 = [0,1, 2, 3,4]
 var array2 = [ 5, 6,7,8,9]

 const newArray = array1.concat(array2);
  console.log(newArray)


var array = [1, 2, 3]
 const isExist = array.includes(2);
 console.log(isExist)

 var array = ["boll", "elephant","rat"]
 const isExist = array.includes("rat");
 console.log(isExist)


var days = ["mon", "sun", "wed", "sat"];
 console.log(days.sort())

 var numbers = [1, 5, 500, 3, 7, 6]
 console.log(numbers.sort())


 var numbers = [1, 5, 500, 3, 7, 6]
 console.log(numbers.sort((a, b) => a - b))
 console.log(numbers.sort((a, b) => b - a))

 var data = ["abc", "pew", 'lmn','yui']

 console.log(data.join("-"))
 console.log(data.join(" "))
console.log(data.join(""))
 console.log(data.join())


 var string = "abc qwe ret ewfku"
 console.log(string.split(" "))
 console.log(string.split(""))




var nums = [1, 2, 3, 4]
console.log(nums.at(0))
console.log(nums.at(2))
console.log(nums.at(6))