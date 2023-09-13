// For Each loop
const coding = ["js" , "python" ,"java" ,"cpp" , "ruby"];


// +++++ Differnt ways to write callback function +++++++
// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe (val){
//     console.log(val);
// }

// coding.forEach(printMe)


// +++++++++++++ other parameter in callback function +++++
// coding.forEach( (item , index , arr) => {
//     console.log(item , index , arr);
// })


const myCoding = [
    {
        langaugeName :"javascript",
        langaugeFileName : "js",
    },
    {
        langaugeName :"python",
        langaugeFileName : "py",
    },
    {
        langaugeName :"java",
        langaugeFileName : "java",
    }
]

myCoding.forEach( (item) => {
    console.log(item.langaugeName , item.langaugeFileName);
})