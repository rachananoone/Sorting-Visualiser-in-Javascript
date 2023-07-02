async function selection(){
    console.log('In selection()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){
        console.log('In ith loop');
        let min_index = i;
        // Change color of the ith position  with the next min
        ele[i].style.background = '#8EA7E9';
        for(let j = i+1; j < ele.length; j++){
            console.log('In jth loop');
            // Change color for the current elements that are being compared
            ele[j].style.background = '#FA877F';            
            await wait(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                console.log('In if condition comparing height');
                if(min_index !== i){
                    // new min is found 
                    // chnage color of prev min
                    ele[min_index].style.background = '#7F669D';
                }
                min_index = j;
            } 
            else{
                // currnent minimum is greater than prev min 
                //change it's color back to normal
                ele[j].style.background = '#7F669D';
            }   
        }
        await wait(delay);
        swap(ele[min_index], ele[i]);
        // change the min element index color back to normal coz its swapped.
        ele[min_index].style.background = '#7F669D';
        // change the sorted elements color
        ele[i].style.background = 'green';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    disableSortBtns();
    disableSize();
    disableNewArray();
    await selection();
    enableSortBtns();
    enableSize();
    enableNewArray();
});