class Rectangle{
    // var width;
    // var height;
    perimeter(width,height){
        var op= 2*(width + height);
        console.log("perimeter of rectangle is" + op);
    }
    area(width,height){
        var op1= width * height;
        console.log("area of rectangle is"+op1);
    }
}
var w1 =  new Rectangle();
w1.perimeter(3,3);
w1.area(3,3);
