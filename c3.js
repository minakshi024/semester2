//for of loop
//used for strings
// let str = "minakshi";
// let size = 0;
// for(let i of str){
//     //iterator -> characters
//     console.log("i", i);
// }
// console.log("length of str",size )

// for in loop
// used for objects and array
// let student = {
//     name: "rahul",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true,
// };
// for(let key in student){
//     console.log("key =" ,key, "value =", student[key]);
// }


// strings
// let str = "minakshi singh";
// let str2 = 'minakshi'; // str.length
// console.log(str);
// console.log(str2[3]);

//Template Literals:- a way to have embedded expressions in str
//-> use back tick

// let specialString = `this is a template literals`;
// console.log( specialString);
// console.log( typeof specialString);
let obj ={
    item: "pen",
    price: 10,
};
//console.log("the cost of", obj.item, "is" , obj.price, "rupees");
let output = `the cost of ${obj.item} is ${obj.price} ruppes`;
// string inyerpoltion :- ro create str by doing substitution of placeholders
//`string text ${expression} string text`

// escape characters
console.log("apna\n college");
console.log("apna\t college");
let str=" minakshi";
console.log(str.length);
// str.toUpperCase()
// str.toLowerCase()
// str.trim() // remobves whitespaces
//str.slice(start,end?) return part od string
//str1.concat(str2)// joins str2 with str1
// str.replace(searchVal, newVal)
// str.charAt(idx)


