// +++++++++ Switch case Syntax ++++++++++

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = "Jan";

switch(month){
    case "Jan":
        if("Jan"){
            console.log("inside First case Statement");
        }
        break;
    
    case "Feb":
        console.log("Feb");
        break;

    case "march":
        console.log("march");
        break;

    case "april":
        console.log("april");
        break;

    default:
        console.log("Plase Enter Correct Month");
        break;
}