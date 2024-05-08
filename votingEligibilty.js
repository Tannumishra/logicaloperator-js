/*
Voting Eligibility Write a program that checks whether a person can vote. 
To be eligible, a person must be at least 18 years old and a citizen of the 
country.
*/

var age = 17
var isCitizenOfCountry = true

if(age>=18 && isCitizenOfCountry){
    console.log("Eligible for Vote")
}
else{
    console.log("You're not Elligible for vote")
}