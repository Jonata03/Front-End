let arr1 = [1,2,3]
let arr2 = [4,5,6]

console.log( arr1.toString())
console.log( arr1.join(" - "))
let arr3 = arr1.concat(arr2,4,5,4,3)

console.log(arr1)
console.log(arr2)
console.log(arr3)

//com o metodo concat é possivel criar clones dos arrays

let arr4 = ["a","b","c"]
let arr5 = [].concat(arr4)

arr4[arr4.length] = "novo valor"
console.log(arr4)
console.log(arr5)