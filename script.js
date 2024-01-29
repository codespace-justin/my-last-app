
/** DATATYPES:
 * 
 * string = normal character used for display purposes
 * number = only numbers, they are used for sums / calculations / etc,  cant start with 0
 * boolean = true / false
 * object = object are variables that contain smaller variables
 * float = normal numbers with decimal values
*/

// constant : constant variable's values cannot be reassigned after they declared and they have to stay the same
const counterDisplay = document.querySelector('#counter-value')
const minusBtn = document.querySelector('#minus-btn')
// console.log(minusBtn)
const plusBtn = document.querySelector('#plus-btn')
// console.log(plusBtn)


// variable : let variable's value can be reassigned
let counterValue = 0

// never re-declare variable
// let counterValue = 20

// proper reassignment of variable
// counterValue = 20

function plus() {
    // counterValue++
    counterValue = counterValue + 1
    counterDisplay.innerText = counterValue
}

const minus = () => {
    // counterValue--
    counterValue = counterValue - 1
    counterDisplay.innerText = counterValue
}

// for (let i = 0; i < 10; i++) {
//     plus()
// }

// for (let i = 0; i < 2; i++) {
//     minus()
// }

minusBtn.addEventListener('click', () => {
    minus()
})

plusBtn.addEventListener('click', () => {
    plus()
})
