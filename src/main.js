//basic things
console.log("hello");
alert("welcome to the page");
//var b = prompt('what is your age');
function a (n1,n2)
{
    let res=n1+n2;
    return res;
};
let b=  a (2 ,4);
document.getElementById('first').innerHTML= "gayu age is " + b ;
let fruits='banana';
let s='gayu\nthiru';
console.log(s);
console.log(fruits.length);
console.log(fruits.indexOf('nan'),fruits.slice(2,6));
console.log(fruits.charAt(2));
console.log(fruits.split(''));
//shift removes fist element, push pop add or delete the last element in array
let numbers=[34,5,8,10,1,2,9,100,870,211,900];

let res=numbers.sort((x,y)=> x-y );//compare x,y  
//x-y=0  ==> no action needed
// x-y= negative value   it is correct order x is smaller number
//x-y= positive value  y is smaller number
console.log(res);// sorting in ascending order (use y-x) for descending order

