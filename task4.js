////
function stir(){
var arr =["shiva", "rajesh","paranay"];
// console.log(arr)
var raj= arr.toString();
return raj;
}
console.log(stir());
/////
var arr=[1,2,3,4,5,-1,-2,-3,-4,-5]

var srt = arr.sort( function(a,b){
    if(a>b)
    {
        return 1;
        
    }
    else{
        return -1
    }
});

     
 console.log(srt);
/////
var arr1=[1,2,3]
var arr2=[1,2,3]
var arr3=arr1.map((value , index)=>value+arr2[index])
console.log(arr3);
////
var prc=[1,3,5,7,6,8]
var sum=0;
var prod=1;
for(var i=0;i<prc.length;i++)
{
    sum = sum+prc[i];
    prod = prod*prc[i];
}
console.log(sum);
console.log(prod);
console.log(prc);
////
var dup=[1,2,3,4,5,1,2]
pos=dup.indexOf(2)
pos1=dup.includes(3)
console.log(pos);
console.log(pos1);
///
function prime(arr1){
    for(n of arr1){
        if(n==1 || (n>2 && n%2==0)){
            return false;
        }
        return true;
    }
}
nums=[3,5,7,11];
console.log(prime(nums));
///
let arrr1 =[1,2,3,4,5];
let arrr2 =[3,4,5];
let arrr3=[...arrr1,...arrr2]
let arrr4=[...new Set(arrr3)]
console.log(arrr4);
///
let arr0= []
arr0[0]="shiva";
arr0[1]="ramesh";
arr0[2]="ram";
console.log(arr)
///
let arrr=[1,2,3,4,5,6,1]
let del =[...new Set(arrr)]
    console.log(arrr);
    console.log(del);
    ////
    var twod=[[1,2,3],[4,5,6]]
    console.log(twod);