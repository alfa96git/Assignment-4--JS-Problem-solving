/* Problem_1 solution: This mindGame take a positive number and after doing some mathematical operation. It will returned an output number. Also checked the input type is integer or not.  */

function mindGame(inputNumber) {
    if (typeof (inputNumber) === 'string') {
        let notice = "Please, Give an integer number.";
        return notice;
    } else {
        let outputNumber = inputNumber * 3;
        outputNumber = outputNumber + 10;
        outputNumber = outputNumber / 2;
        outputNumber = outputNumber - 5;
        return outputNumber;
    }
}

/*
let inputNumber = 33;
inputNumber = Math.abs(inputNumber);
let outputResult = mindGame(inputNumber);
console.log(outputResult);
*/

//---------------------------------------------------




/*  Problem_2 Solution: Using a function called evenOdd() to take string and calculate the length of this string.
then find out the remainder 0 or 1. if 0 return true but if 1 then return false. Also checked the input type is string or not. 
*/

function evenOdd(givenString) {

    if (typeof (givenString) === 'string') {
        let len = givenString.length;
        if (len % 2 == 0) {
            return 'even'; 
        } else {
            return 'odd';  
        }
    } else {
        let notice = 'Please, Give an input String.';
        return notice;
    }
}

/*

let givenString = 'Batch-7';
let outputNumber = evenOdd(givenString);
console.log(outputNumber);
*/

//--------------------------------------------------------------------




/* Problem_3 Solution: Take integer number as a input and checked the number is string or number. finally applied mathematical operation based on requirement the output number will return.

*/

function isLGSeven(inputNumber) {
    if (typeof (inputNumber) === 'string') {
        let notice = "Please, Give an integer number.";
        return notice;
    } else {
        let calculateResult = inputNumber - 7;
        if (calculateResult < 7) {
            return calculateResult;
        } else {
            return inputNumber * 2;
        }
    }
}

/*

let inputNumber = 15;
let result = isLGSeven(inputNumber);
console.log(result);
*/



//--------------------------------------------------------------

/*  Problem_4 Solution: Call Input Array using findingBadData() function. check the parameter is an array or not. 
calculate the number o array element when the index value is negative. 
*/


function findingBadData(givenArray) {
    let isArray = Array.isArray(givenArray);

    if (isArray == true) {
        let badDataCount = 0;
        let lengthOfGivenArray = givenArray.length;

        for (let i = 0; i < lengthOfGivenArray; i++) {
            if (givenArray[i] < 0) {
                badDataCount++;
            }
        }
        return badDataCount;
    } else {
        let notice = "Please, Give an Array as input type."
        return notice;
    }
}

/*
let givenArray = [1, -2, -3, -5];
let counter = findingBadData(givenArray);
console.log(counter);
*/


//-------------------------------------------------------------------


/*  Problem_5 Solution: Take 3 input number. check all input element is number or not. After doing some mathematical operation based on requirement the output number will return. 

*/


function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {

    if (typeof (firstFriend) === 'string' || typeof (secondFriend) === 'string' || typeof (thirdFriend) === 'string') {
        let notice = "Please, give integer number.";
        return notice;
        
    } else {

        let firstFriendTotalDiamond = firstFriend * 21;
        let secondFriendTotalDiamond = secondFriend * 32;
        let thirdFriendTotalDiamond = thirdFriend * 43;

        let totalDiamond = firstFriendTotalDiamond + secondFriendTotalDiamond + thirdFriendTotalDiamond;

        if (totalDiamond > 2000) {
            totalDiamond = totalDiamond - 2000;
        }
        return totalDiamond;
    }

}



/*

let firstFriend = 20;
let secondFriend = 200;
let thirdFriend = 50;

let numberOfTotalDiamond = gemsToDiamond(firstFriend, secondFriend, thirdFriend);
console.log(numberOfTotalDiamond);
*/


//-----------------------------------------
