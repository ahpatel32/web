/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Aakash Harendrakumar Patel     Student ID: 147805238       Date: 15/05/2024
*
********************************************************************************/


serverVerbs = ["GET","GET","GET","POST","GET","POST"]
serverPaths = ["/","/about","/contact","/login","/panel","/logout"]
serverResponses = ["Welcome to WEB700 Assignment 1","This assignment was prepared by Aakash Patel","Aakash Patel:ahpatel32@myseneca.ca","User Logged In","Main Panel","Logout Complete"]

function httpRequest(httpVerb,path) {
        // for loop to go through the different serverPaths
        for (var i = 0; i < serverPaths.length; i++) {
            // checking if the httpverb and path is matching with serververbs and serverpaths simultaneously
            if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
                // Return the serverResponse with statuscode 200 if the match is found.
                return `200: ${serverResponses[i]}`;
            }
        }
        // Return the message with statuscode 404 if the match is not found.
        return `404: Unable to process ${httpVerb} request for ${path}`;
}

/*
//Manual Testing of the function
console.log(httpRequest("GET","/"));
console.log(httpRequest("GET","/about"));
console.log(httpRequest("PUT","/"));
*/

//function to get the random integer values.
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//function to automate the testing of function httpRequest
function automateTests() {
    //declaring the testVerbs and testPaths arrays
    testVerbs = ["GET","POST"]
    testPaths = ["/","/about","/contact","/login","/panel","logout","/randomPath1","randomPath2"]

    //function to call random request for function httpRequest.
    function randomRequest() {
        //declaring randVerb and randPath variable which will take random value from the testVerbs and testPaths values.
        randVerb = testVerbs[getRandomInt(2)]
        randPath = testPaths[getRandomInt(7)]
        //using functioncall variable to call the httpRequest function with random values.
        functioncall = httpRequest(randVerb,randPath)
        //printing the output of every call of functioncall.
        console.log(functioncall)
    }
    //setting the interval to 1 second
    setInterval(randomRequest,1000);
}

//calling the function automateTests() to test the automation of httpRequest.
automateTests();