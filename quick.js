async function partition(ele, l, r){
    console.log('In partition()');
    let i = l - 1;
    // change color 
    ele[r].style.background = '#FA877F';
    for(let j = l; j <= r - 1; j++){
        console.log('In partitionLomuto for j');
        // change color 
        ele[j].style.background = '#F0F696';
        // pause 
        await wait(delay);
        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            console.log('In if condition comparing height');
            i++;
            swap(ele[i], ele[j]);
            // change color of the elements after swapping 
            ele[i].style.background = '#FFAD87';
            if(i != j) ele[j].style.background = '#FFAD87';      
            // pause 
            await wait(delay);
        }
        else{
            // change colour of the element if it is not less than pivot element
            ele[j].style.background = '#F5B0CB';
        }
    }
    i++; 
    // pause before swapping
    await wait(delay);
    swap(ele[i], ele[r]); 
    // change color 
    ele[r].style.background = '#F5B0CB';
    ele[i].style.background = 'green';
    // pause  after swapping
    await wait(delay);   
    // change color 
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green')
            ele[k].style.background = '#7F669D';
    }
    return i;
}

async function quickSort(ele, l, r){
    if(l < r){
        let pivot_index = await partition(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSortBtns();
    disableSize();
    disableNewArray();
    await quickSort(ele, l, r);
    enableSortBtns();
    enableSize();
    enableNewArray();
});