//Question 1
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,

}
console.log(student.name,","+ student.sclass, ","+ student.rollno)

//Question 2
var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
}
console.log("Before deleting",student)
delete student.rollno
console.log("After deleting: ",student)

//Question 3
var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
}
const propOwn = Object.getOwnPropertyNames(student);
console.log(propOwn.length)

//Question 4
var library = [ { 
    author: 'Bill Gates', 
    title: 'The Road Ahead', 
    readingStatus: true 
}, 
{   author: 'Steve Jobs', 
    title: 'Walter Isaacson', 
    readingStatus: true 
}, 
{   author: 'Suzanne Collins', 
    title: 'Mockingjay: The Final Book of The Hunger Games', 
    readingStatus: false 
}]

console.log("Book name: ",library[0].title + "," + " Author: ", library[0].author + "Reading status: ", library[0].readingStatus)
console.log("Book name: ",library[1].title + "," + " Author: ", library[1].author + "Reading status: ", library[1].readingStatus)
console.log("Book name: ",library[2].title + "," + " Author: ", library[2].author + "Reading status: ", library[2].readingStatus)


//Question 5
const volumeOfCylinder = (height,diameter) => {
    return height * Math.PI * diameter/2 * diameter/2;
}

console.log(volumeOfCylinder(7,7).toFixed(4))

//Question 6
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];

console.log('before sorting...', library)
library.sort((a,b) => {
    if(a.title < b.title){
        return -1
    }
    else if(a.title > b.title){
        return 1
    }
    return 0
})
console.log('after sorting...', library)