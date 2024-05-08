/*
 Login Authentication: program for a website login system. Users should be 
authenticated if they enter the correct username and password. If the user 
enters the wrong password (enteredPassword ! correctPassword), 
display an error message. Use the logical NOT operator to perform this 
check
*/

var userName = "admin"
var passWord = "1234"

var enteredUserName = "admin"
var enteredPassWord = "1234"

if(userName == enteredUserName)
    {
        console.log("Username is verified successfully")
    
    if(passWord !== enteredPassWord)
        {
            console.log("Your's password is correct")
        }
        else{
            console.log("Password is not correct")
        }
    }
    else{
        console.log("Login not successfully")
    }