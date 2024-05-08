/*
Discount Eligibility Create a program for a store that offers a discount on a 
purchase. To receive the discount, customers must have a valid 
membership card (hasMembershipCard) and spend more than 2000
*/

var totalSpend = 5000
var validMembershipCard = true

if(validMembershipCard && totalSpend > 2000)
    {
        console.log("20% Disscount on a purchase")
    }
    else{
        console.log("Didn't have a Discount")
    }

