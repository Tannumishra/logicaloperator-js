/*
 Dinner Options: decide where to have dinner with your family. If your 
favorite restaurant has a discount (isSpecialOffer) or you're craving pizza 
(cravingPizza), choose one of those options; otherwise, cook dinner at 
home. Use the OR operator
*/

var favoriteRestaurant = "Krishna Sagar restaurant"
var isSpecialOffer = true
var cravingPizza = false

if(isSpecialOffer || cravingPizza){
    console.log("Hurrah! you get a discount of 20% at your " +favoriteRestaurant)
}
else{
    console.log("Cook dinner at home")
}