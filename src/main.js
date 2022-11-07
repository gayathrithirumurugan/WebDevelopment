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
// console.log(res);//  (use y-x) for descending order
// for(let a=0;a<10;a++)
// {
//   setTimeout(function() {console.log(a)}, a*1000);
// }

// console.log((function(a) {
//     return (function (b)
//     {
//       console.log(a);
//     })(5)
//   })(6));
  
  // console.log((function(a, b) {
  // return a + b;
  // })(2, 3));
// let c=async function()
// {
//     await "pinky";
//     return "pinky";
// }
//   console.log(c());
//   console.log("hello");
//retuning unique values in array
  let arr=[10,1,2,5,6,1,3,2,3,8,5,5,6,9];
//   let a1=[];
//   let b1={};
//   for(let i=0;i<arr.length;i++)
//   {
//     b1[arr[i]]=0;
//   }
//   for(let i in b1)
//   {
//     a1.push(i);  //display the elements in ascending order
//   }
 
//  a1.sort((x,y)=> y-x); //after sorting index starts from 0 to n-1
//  console.log(a1)
//  let l=a1.length;
//  console.log("l value",l);
//  for(let i=0;i<2;i++)
//  {
//   console.log(a1[i]); // output:10 9
//  }

//using filter removing duplicates
// const r=arr.filter((element,index)=> {return index == arr.indexOf(element)});
// console.log(r); //displays unique values but not in a sorted order
// let js=[
//    "gayu",
//   23,
//   "IT"
// ];
// let obj='IT';

// const F=js.filter((element,index)=> element=== obj).length;
// if(F===0)
// console.log("not found");
// else if(F>0)
// console.log("found");
//second largest number in an array
// let g=[30,50,100,90];
// let ans= Math.max.apply(null,g);
// g.splice(g.indexOf(ans),1); //splice remove element at specific index 
// console.log(Math.max(...g));

//array rotations using normal way
// let an=[1,2,3,4,5];
// let x=2;
// var te=[];
// for(let i=0;i<x;i++)
// { 
//   te[i]=an[i];

// }
// for(let i=0;i<x;i++)
// {
// an.shift();}
// an.push.apply(an,te);
// console.log(an);

//power value
//console.log(Math.pow(2,3));

//implement stack using linkedlist concept
// var root;
  
//      class StackNode {
  
//         constructor(data) {
//             this.data = data;
//             this.next = null;
//         }
//     }
  
//      function isEmpty() {
//         if (root == null) {
//             return true;
//         } else
//             return false;
//     }
  
//      function push(data) {
//         var newNode = new StackNode(data);
  
//         if (root == null) {
//             root = newNode;
//         } else {
//             var temp = root;
//             root = newNode;
//             newNode.next = temp;
//         }
//         console.log(data + " pushed to stack<br/>");
//     }
  
//      function pop() {
//         var popped = Number.MIN_VALUE;
//         if (root == null) {
//             console.log("Stack is Empty");
//         } else {
//             popped = root.data;
//             root = root.next;
//         }
//         return popped;
//     }
  
//      function peek() {
//         if (root == null) {
//             console.log("Stack is empty");
//             return Number.MIN_VALUE;
//         } else {
//             return root.data;
//         }
//     }
  
//     // Driver code
//         push(10);
//         push(20);
//         push(30);
  
//         console.log(pop() + " popped from stack<br/>");
  
//         console.log("Top element is " + peek());
 

//implement stacking using array concept
// var stack=[];
// var data;
// function add(data)
// {
    
// stack.push(data);
// console.log("Inserted",data )
// }

// function del()
// {
//    if(stack.length<0)
//    {
//     console.log("NO data to pop");
//    }
//    else
//    {
//     stack.pop();
//    }
// }
// function peek()
// {
//     if(stack.length<=0)
//     {
//         console.log("NO data");
//     }
//     else{
//         let top=stack.length -1;
//       console.log(stack[top]);
//     }
// }

// del();
// add(2);
// add(4);
// del();
// peek();

//implement stack using array without push and pop
// var max=100;
// var stack=new Array(max);
// var data;
// let tops = -1;
// function add(data)
// {
//     if(tops>=max-1)
    
//     {
//    console.log("stack overflow");
//     }
//     else
//     {
//         tops++;
//         stack[tops]=data;
//         console.log("Inserted",stack[tops]);
//     }
// }
// function del()
// {
//     if(tops < 0)
//     {
//         console.log("NO data");
//     }
//     else
//     {
//         let pop=stack[tops];
//         tops--;
//         console.log("deleted",pop);
//     }
// }
// function peek()
// {
//    if(tops === -1)
//    {
//     console.log("stack is empty");
//    }
//    else
//     console.log(stack[tops]);
// }

// del();


//JSON parse
let inventory = [
    {
      brand: 'Parle',
      products: [
   {
          brand: 'Parle Agro',
          products: [
            {
              brand: 'Frooti',
              products: []
            },
            {
              brand: 'Bailey',
              products: []
            }
          ]
        }
      ]
    },
    {
      brand: 'Pepsico',
      products: [
        {
          brand: 'VB',
          products: [
            {
              brand: 'Lays',
              products: []
            },
            {
              brand: 'Kurkure',
              products: [
                {
                  brand: 'Mad Angles',
                  products: []
                }
              ]
            }
          ]
        },
        {
          brand: 'Pepsi',
          products: []
        }
      ]
    },
    {
      brand: 'Cadbury',
      products: []
    }
  ];
  const text= JSON.stringify(inventory);
//   for(let i=0;i<inventory.length;i++)
//   {
//     if(inventory[i].brand === 'Parle')
//     {

//     }
//   }
  console.log(inventory[0].brand);
  console.log(inventory[1].products[0].products.length);
const obj=Object.assign({},inventory[0].products);
console.log(obj.brand);