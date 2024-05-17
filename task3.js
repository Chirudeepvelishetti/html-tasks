function Km2m(kms){
  var  mi=kms*0.62;
    return mi;
}

console.log(Km2m(10));
///
function Reversenum(num){
    var rev = num.toString().split('').reverse().join('');
    return rev;
}
console.log(Reversenum(30));
///

function vowelscount(str){
  var voels = str.match(/[aeiou]/gi);
  if(voels === null){
    return 0;
  }
  else{
    return voels.length;
  }
}
console.log(vowelscount("chirudeep"));
/////
function numbers(num1, num2){
   
  if(num1 === num2){
      return num1+num1+num1;
  }
  else{
      return num1+num2;
  }
}
console.log(numbers(5,20));
////
function maxofthree(){
  var num =[1,3,5,8,2]
  var max =num[0];
  for(var i=0;i<num.length;i++){
    if(num[i]>max){
      max=num[i]
    }
  }
  console.log(max);
}
maxofthree();
//// using math.max method
function maximum(){
  var num=[1,2,3,5,8,44]
  var max = Math.max(...num);
  console.log(max);
}
maximum();
///
function concat(str1 , str2){
        str1= str1.substring(1);
        str2= str2.substring(1);
        return str1+str2;
}
console.log(concat('shiva' , 'kumar'));
///
function three(x ,y ,z){
  var x=x%10;
  var y=y%10;
  var z=z%10;
  if(x===y && x===z){
      return true;
  }
  else{
      return false;
  }
}
console.log(three(10,20,30));
///
function upcase(str){
  var rep = str.split(' ');
  for(var i=0;i<rep.length;i++){
      rep[i]=rep[i].charAt(0).toUpperCase()+rep[i].substring(1);
  }
  return rep.join(' ');
}
console.log(upcase("my name is shiva"));
