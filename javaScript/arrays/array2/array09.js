//for in e for of
const arr = [1,2,3]
const obj = {
    nome:"maria",
    idade:"28",
    email:"maria@gmail.com"
}
for (let prop in obj){
    console.log(prop)
    console.log(obj[prop])
}
for(n of arr){
    console.log(n)
}