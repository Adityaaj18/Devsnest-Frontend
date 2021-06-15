//Question 1
const isArray = (input) => {
    if(Array.isArray(input)){
        return true
    }
    return false
}

console.log(isArray([4,6]))



//Question 2
const clone = (arr) => {
    let newArr = [...arr]
    console.log(newArr);
}

clone([2,3,4,4])

//Question 3
const firstElement = (arr, n) => {
    if(arr.lenght < 0){
        return []
    }else{
        return arr.slice(0, n)
    }
    
}
console.log(firstElement([], -2));


//Question 4
const joinEl = (arr) => {
   console.log(arr.join());
}
joinEl(['red','green','blue','yellow'])

//Question 5
count = 0
max = 0

const frequentEl = (arr) => {
    arr.map((el) => {
        arr.map((bl) => {
            if(el == bl){
                count++
            }
        })
        if(count > max){
            max = count
        }
        count = 0
    })
    console.log(max);
}

frequentEl([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])