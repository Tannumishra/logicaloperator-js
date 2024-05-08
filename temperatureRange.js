/*
 Temperature Range: determine if a given temperature is within a 
comfortable range for outdoor activities. If the temperature is between 65°F 
and 85°F (temperature  65 && temperature  85, it's considered 
comfortable. If it's outside this range, it's either too hot or too cold for 
outdoor activities.
*/


var temperature = 90
if(temperature >= 65 && temperature <= 85 )
    {
        console.log("It's considered comfortable")
    }
    else{
        console.log("It's either too hot or too cold")
    }