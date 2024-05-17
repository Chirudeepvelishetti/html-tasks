function power(c){
    var a= Math.log2(16);
    return a;
}
console.log(power());
///
//Write a JavaScript function to cast the square root of a number to an inteeger
function square(){
    var a= Math.sqrt(16);
    return a;
}
console.log(square());
///
function rou(b){
    var c = Math.round(12+b);
    return c;
}
console.log(rou(3));
////trim
function trimmi(){
    var aa="        shiva      ";
    
    var bb =aa.trim();
    return bb;
    }
    console.log(trimmi());
    ///Program to check the number of occurences of a character in a string
    function mat(str){
        var reg=str.match(/[s]/ig)
        return reg.length;
    }
    console.log(mat("shivasspass"))
//.Program to compare two strings and return "true" if equal and "false"if not equal   
function compa(str1 , str2){
    if(str1 === str2){
        return true;
    }
    else{
        return false;
    }
}
console.log(compa("shiva","shiva"))
/// Write a JavaScript function to convert a positive number to a negative number.
function abs1(a1){
    var b1 = -Math.abs(a1)
    return b1;
}
console.log(abs1(10));
//Write a JavaScript function to split a string and convert it into an  array of words.
function stta(str11){
    return str11.trim().split(" ");
}
console.log(stta("i am chiru deep"));
////Write a JavaScript function to count substrings in a string.
function subst(str12){
    var sl2= str12.trim().split(" ");
    var s13=sl2.length
    return s13;
}
console.log(subst("i am chirudeep"))
//Write a JavaScript program to create a class called 'Rectangle' with
// properties for width and height. Include two methods to calculate
// rectangle area and perimeter. Create an instance of the 'Rectangle'
// class and calculate its area and perimeter.
class Rectangle{
    // var width;
    // var height;
    perimeter(width,height){
        var op= 2*(width + height);
        console.log(op);
    }
    area(width,height){
        var op1= width * height;
        console.log(op1);
    }
}
var w1 =  new Rectangle();
w1.perimeter(3,3);
w1.area(3,3);
//