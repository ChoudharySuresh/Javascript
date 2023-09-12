// Immediately Invoked Function Expression (IIFE)

// why we need IIFE to avoid global Pollution there are many global variables to do not pollute our function then we use IIFE


// +++++ Named IIFE
(function func(){
    console.log("DE CONNECTED");
})(); // always give semicolon when there are two IIFE


( (name) => {
    console.log(`DB CONNECTED Two ${name}`);
})("Suresh");
