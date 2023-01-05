//required abilities of a calculaor:
//accept user inputs of a number, operator, and another number
//store inputs
//recognize the inputs and perform calculations
//return a result

//optional features:
//accept longer arithmetic operations.
//display all input as it is being entered
//should accept decimals
//once completed, we want the sum to be the start of the new equation unless cleared
//prevent invalid
//clear button should clear all entries

const keys = document.querySelector('.calculator-buttons',)
// allows us to listen for clicks among the calculator buttons
keys.addEventListener('click', event => {   //on click we are passing in something called an event
    const { target } = event;  //we want to grab the target property from the object 'event'. reach into event and grab the target property. object deconstructor. if you console log target, we get our html button tag.
    const { value } = target;   //from that target we want to grab the value of the target property (our calculator number)
    if (!target.matches('button')) {    //checking to make sure that the target that was clicked was a button, and if they did then we are gonna pass in the value of that button. This just keeps it from being able to click something other than the button, that it doesnt proceed further.
        return;
    } else {
        calculator.parseInput(value)
        console.log(target)
    }
})

const calculator = {
    displayText: '0',
    prevTotal: null,  //null is nonexsistent value

    parseInput(value) {

        //check and see if have any of the "special buttons" have been clicked such as AC or = or .
        switch (value) {
            case '=':
                //calculate the answer
                break; //when writing switch statement we have to write break at the ends of each statement
            case 'AC':
                //clear screen and stored values
                break;
            case '.':
                if (this.displayText == 0) {
                    //pass '0.' into add text method
                } else {
                    //add value to text string
                }
                break;
            default:
            //add value to text string
        }

    },

    addText(value) {

    },
}