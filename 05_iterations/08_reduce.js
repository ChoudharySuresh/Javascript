const nums = [1,2,3];

// const myResult = nums.reduce(function (accumulator , currentValue){
//     console.log(`Accumulator ${accumulator} and currentValue ${currentValue}`);
//     return accumulator + currentValue;
// } , 0)

const myResult = nums.reduce( (acc , currVal) => acc+currVal , 0);

// console.log(myResult);


const shoppingCart = [
    {
        itemName:"js Course",
        price:2999,
    },
    {
        itemName:"Python Course",
        price:999,
    },
    {
        itemName:"Android Dev Course",
        price:5999,
    },
    {
        itemName:"Data science Course",
        price:12999,
    },
]

const priceToPay = shoppingCart.reduce((accumulator , currentValue) => accumulator+ currentValue.price ,0)
console.log(priceToPay);