let a = 10;
let b = 11;

let name="bobby";

console.log(typeof name);

let b = 20;
let c = 11;
console.log(++b + ++c);

var j=1;

while(j<=10){
  console.log(j);
  j++;
}



let a = 20;
if(a < 10){
  console.log("valueis less then 10")
}
else{
  console.log("value is grater than 10")
}

var grade = "C";
switch(grade) {
    case'A': console.log("excelent");
    break;
    case'B': console.log("Good");
    break;
    case'C': console.log("Better");
}

for(var i=0; i<5 || i==5; i++){
  console.log("value of i is", i);
}

var k = 1;
do{
  console.log(k);
  k++;
} while(k<=5);