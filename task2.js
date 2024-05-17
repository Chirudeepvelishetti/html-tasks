// convertions//
// centimeter to meter//
var a=5;
var b = a*100;
console.log('conerting centimeter to meter',b);
//liters to milli liters//
var li=1;
var ml =li*1000; // to convert l to ml 1*1000 liter = 1000ml
console.log('liter to milliliter',ml);
//kgs to gms//
var kg=10;
var gms= kg*1000;
console.log(kg +"kg is equals to"+" "+ gms +"grams");
//tones to kilograms//
var tones=1;
var kgs=1*1000;
console.log(tones + "ton is equals to"+" "+ kgs+"kilograms");
//sqft to sqyrds//
var sqft=100;
var sqyard= sqft/9;
console.log(sqft + "sqft is equals to " +sqyard+"sqyards");
//lbs to kgs
var lbs=10;
var kgs= lbs*0.454;
console.log(lbs+"lbs is equals to"+" "+kgs+"kgs");
//feet to inches//
var feet=10;
var inches=feet*12;
console.log(feet+"feets is equals to"+" "+inches+"inches");
//speed by distance and time
var distance=100;
var time=2;//time is in hours 
var speed=distance/time;
console.log(speed);
//milage by kmpl
var dist=100;
var ti=2;
var kmpl=dist/ti;
console.log(kmpl);
//quintals to kilograms
var quintal=10;
var kgs= quintal*100;
console.log(quintal +"is equals to "+kgs+"kgs");
//kilometers to meters
var km=10;
var m=km*1000;
console.log(km+"km is equals to "+m+" meters");
//sqft to cents
var sq=100;
var cents=435.56*100;
console.log(sq+"is equals to "+cents+"cents");
//degrees to celsius
var d=10;
var cel=d*32;
console.log("faranheat is "+cel);
//check eligability for vote
var age=25;
if(age>18){
    console.log("eligible")
}
else{
    console.log("not eligible");
}
//driving lisence eligibility
var dage=20;
var std=12;
if(dage>=18 && std>=10){
    console.log("eligible")
}
else{
    console.log("not eligible");
}
//count characters in string
var str="shiva";
console.log(str.length);
//adding 2 strings
var str1="chiru";
var str2="deep";
var str3 = str1.concat(str2);// concat is  a js method to add 2 ormore independent strings
console.log(str3);
//-----
function voelscount(str){
    var voels=str.match(/[aeiou]/gi);
    // return voels ? voels.length:0;
if(voels=== null){
    return 0;
}
else{
   return  voels.length;
}
}
console.log(voelscount("shiva"));
// string rev
// var strin="shiva"
var name='shiva';
var rev= name.split("").reverse().join("");

console.log(rev);
//positive or negative
var num=10;
if(num>=0){
    console.log(num+"is positive number")
}
else{
    (num+"is negitivie number")
}
//smaller among 2 values
var a=10;
var b=20;
if(a<b){
    console.log(a +"is smaller")
}
else{
    console.log(b+"is smaller");
}
//bigger among two numbers
var a=10;
var b=20;
if(a<b){
    console.log(b +"is greater")
}
else{
    console.log(a+"is greater");
}
//area of square
l=10;
b=10;
area=l*b;
console.log(area+" area of square is");
//area of rectangle
 var la= 3;
 var lb=5;
 var rarea=(l*b);
 console.log(rarea);
 //area of triangle
let tb=5;
let th=8;
let tarea=(1/2*tb*th);
console.log(tarea);
//avg of two numbers
let aa=6;
let ab=4;
let avg = ((aa+ab)/2);
console.log(avg);
//fahrenheit to celsius
 var temp=37;
var fh=(temp*9/5)+32;
 console.log(fh);
//perimetre of rectangle
 let pl=50;
 let pb=80;
 let perimetre=parseInt((pl+pb)*2);
 console.log(perimetre);
 //reverse of number
let num1 = 123456789;
let result = num1.toString().split('').reverse().join('');
console.log(result);
//area of circle
let radius=10;
let result1=(radius*radius)*3.14
console.log(result1);
//
//palindrome or not
function checkpalindrome(string){
    let revstring=string.split('').reverse().join('');
    if (string===revstring)
    return true;
 else 
 return false;
 }
 result=checkpalindrome("palindrome")
 if (result==true){
 console.log("Given string is palindrome")}
 else{ 
 console.log("Give string is not palimndrome")
 }
 //leap year or not
let year=2001;
if(year%4 ==0 && year%100 !=0 || year%400 ==0){
     console.log("It is a leap year")
 }
 else{
     console.log("It is not a leap year")
 }
//sqrt of number
let sq1=5;
let sq2=sq1*sq1;
console.log(sq2);
//swap
let i=10;
let j=20;
let temp2;
temp2=i;
i=j;
j=temp2;
console.log(i);
console.log(j);
//multiplication table
 const number=10;
 for(let i=1;i<=10;i++){
result3=i*number;
 console.log(result3);
 }
 //sum of natural numbers
  const number5=5;
   let result5=0;
  for(let i=1;i<=number;i++){
      result5+=i;
      console.log(result5);
  }
 // fibonnaci series

const number8 = 19;
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

 for (let i = 1; i <= number8; i++) {
     console.log(n1);
     nextTerm = n1 + n2;
     n1 = n2;
    n2 = nextTerm;
 }
/// check
function Prime(checknumber)
			{
				var i,flag=0;
				for(i=2; i <= checknumber/2; i++)
				{
					if(checknumber%i == 0)
					{
						flag = 1;
						break;
					}
				}
				if(flag == 0)
				{
					console.log("prime number");
				}
				else
				{
					console.log("not a Prime number");
				}
			}
            Prime(20);
            //between
            let initial = 2 
            let end = 11 
            let ii, jj, flag; 
            for (ii = initial; ii <= end; ii++) { 
                if (ii == 1 || ii == 0) 
                    continue;
                flag = 1; 
             for (jj = 2; jj <= ii / 2; ++jj) { 
                    if (ii % jj == 0) { 
                        flag = 0; 
                        break; 
                    } 
                } 
                if (flag == 1) 
                    console.log(ii); 
            }
// comparing strings
stringcomp1= 'shiva';
stringcomp2='shiva';
str3=stringcomp1==stringcomp2
console.log(str3);
 



