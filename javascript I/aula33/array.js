const arr = ["a", "b", "c", "d", "e", "f"];
console.log(arr);


let lenth = arr.push("g")
console.log(arr)
console.log(lenth)

lenth = arr.unshift("h")
console.log(arr)
console.log(lenth)

const lastElement = arr.pop()
console.log(arr)
console.log(lastElement)

const firstElement = arr.shift()
console.log(arr)
console.log(firstElement)





const exist = arr.includes("b")
console.log(exist)

const index = arr.indexOf("b")
console.log(index)

const part = arr.slice(1, 4)
const last2Elements = arr.slice(-2)

const more = arr.concat(part, last2Elements)
console.log(more)

const removedElements = arr.splice(index, 1, "jonas", "machael")


for (let i=0;i<arr.length;i++) {
    console.log(arr[i], "is in position", i)
}