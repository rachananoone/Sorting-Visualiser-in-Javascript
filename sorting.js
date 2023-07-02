// swap function 
function swap(el1, el2) { 
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;   
}

// Disables sorting buttons used in conjunction with enable
function disableSortBtns(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortBtns(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
}

// Disables size slider used in conjunction with enable
function disableSize(){
    document.querySelector("#arr_sz").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSize(){
    document.querySelector("#arr_sz").disabled = false;
}

// Disables newArray buttons used in conjunction with enable
function disableNewArray(){
    document.querySelector(".newArray").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArray(){
    document.querySelector(".newArray").disabled = false;
}

// Used in async function so that we can so animations of sorting,input time in ms 
function wait(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

/*
Selecting size slider from DOM
Event listener to update the bars on the UI
*/
let ArraySize = document.querySelector('#arr_sz');
ArraySize.addEventListener('input', function(){
    createArray(parseInt(ArraySize.value));
});

/*Adding Delay 
taking input for wait function 250ms
Selecting speed slider from DOM
Adding Event listener to update delay time 
*/
let delay = 250;
let delayElement = document.querySelector('#speed_input');
delayElement.addEventListener('input', function(){
    delay = 320 - parseInt(delayElement.value);
});

/*
Creating array to store randomly generated numbers
Creating a function to display bars right when you visit the site
*/ 
let array = [];
createArray();

/*
 create new array input size of array
 calling delete  function to prev bars from dom
 creating an array of random numbers
 select the div #bars element 
 creating multiple element div using loop and adding class 'bar col'
*/
function createArray(noOfBars = 60) {
    deleteChild();
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    const bars = document.querySelector("#bars");
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// function to delete all prev bars
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    enableSortBtns();
    enableSize();
    createArray(ArraySize.value);
});