//User Data
let id_user = 18210503; //
let firtName = "Jadro"; //
let middleName = "Alain";//
let lastName = "Montes Ballesteros";//
let email = "jadro.montes@gmail.com";//
let country = "Mexico";//
let address = "Tijuana B.C Presa ";//

//Product Dates 
let id_product = 80806098;//
let productName = "Laptop";//
let productDescription = "Hp Pavilion 20 Series";//
let specifications = "16gb ram, Intel i7 8th Gen, 500gb SSD";//
let amount = 410.45;//
let warranty = "1 year of warranty";//

//Payment Details
let cardNumber = "3234 7272 9899 0021"; //
let type = "MasterCard";//

//Purchase Data
let seller = "Amazon";
let id_purchase = 562315;//
let shoppingDay = "December 20 2021";
let shipping = "December 21 2021";
let arrival = "December 26 2021"

document.write(`

Hi! ${firtName} ${middleName} ${lastName} thanks for shopping in Amazon. <br>
😀 Please collaborate your user and product data 😀 <br><br>

<b>User:</b>${firtName} ${middleName} ${lastName}<br>
<b>Product Description:</b> ${productName}, ${productDescription}, ${specifications}, ${warranty}<br>
<b>Final Price:</b> ${amount}dollars <br>
<b>Payment Details:</b> Card: ${cardNumber}, Type: ${type} <br>
<b>Direction:</b> ${country} ${address} <br>
<b>Purchase Data:</b> Id_User: ${id_user}, E-mail: ${email}, Id_Purchase: ${id_purchase}, Id_Product: ${id_product}, Seller: ${seller}, Order: ${shoppingDay}, Shipping: ${shipping}, Arrival: ${arrival}
`); 

