
// import module
require('dotenv').config();
const Express               =require('express');



//deklarasi
const app   = Express();
const PORT  = process.env.PORT || 5000;






// console server
app.listen (PORT, () => {
    console.log( `Server Runnig at Port: ${PORT}`)
});