var orders={
    orderid : 100001,
    name: "chirudeep",
    amount:3000,
    paymentmode:"cash on delivery"
};
console.log(orders);
for(let key in orders){
   console.log(key,orders[key])
}