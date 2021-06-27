//Question 1

let name = {
  firstname: "Aditya",
  lastName: "Jadhav",
};

let name2 = {
  firstname: "MS",
  lastName: "Dhoni",
};

let printFullName = function (hometown, state) {
  console.log(this.firstname + " " + this.lastName);
};

//call method
printFullName.call(name, "Kalyan", "Maharashtra");
printFullName.call(name2, "Patna", "Bihar");

//apply method
printFullName.apply(name, ["Kalyan", "Maharashtra"]);
printFullName.apply(name2, ["Patna", "Bihar"]);

//bind method
let printMyName = printFullName.bind(name, "Kalyan", "Maharashtra");
printMyName();

let printMyName2 = printFullName.bind(name2, "Patna", "Bihar");
printMyName2();
