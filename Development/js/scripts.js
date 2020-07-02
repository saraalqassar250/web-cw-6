 
 var mat=["yes","No","definitly"]
mat.forEach(logger);
 function logger(x){
     console.log(x)
 }

 let summerdegree=[45,50,40,54];
 var newarray = summerdegree.map(myFunction)

 function myFunction(x) {
   return x > 40
 }


let books=[
{
  name:"book1",
  ID:1, 
},
{
  name:"book2",
  ID:2,
},

{
  name:"book3",
ID:3,
},

{
  name:"book4",
ID:4
}
];
let result = getbookbyId(books, 4);
if (result == 1){
console.log("found")
}
else {
  console.log("not found")
}


function getbookbyId(books,ID)
{
  for( i of books) {
    if( i.ID == ID){
      return 1;
    }

  }

}
/*
getbookbyId(books,5){
  {console.log("متوفر")
  }
  else return console.log("غير متوفر")
}
*/



// let done=[
// {product=prompt("enter your product")},
// {price=prompt("enter price")},
// {quantity=prompt("enter quantity")},
// ];

let done=[]
let product=[]
let price=[]
let quantity=[]

while (done!="done") {
  product.push(prompt("enter your product"));
  price.push(prompt("enter price")); 
  quantity.push(prompt("enter quantity"));
  done.push(prompt('enter done when youre done.'));

 
 // quantity.push(quantity);
 // price.push(price);
  
}

// let result=[]






