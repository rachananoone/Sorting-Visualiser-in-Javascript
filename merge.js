//let delay = 30;
async function merge(ele, low, mid, high){
    console.log('In merge()');
    console.log(`low=${low}, mid=${mid}, high=${high}`);
    const n1 = mid - low + 1;
    const n2 = high - mid;
    // creating 2 arrays 
    // copying elements before mid into left array
    // copying elements after mid into right array
    console.log(`n1=${n1}, n2=${n2}`);
    let left = new Array(n1);
    let right = new Array(n2);
    for(let i = 0; i < n1; i++){
        await wait(delay);
        console.log('In left part of array');
        console.log(ele[low + i].style.height + ' at ' + (low+i));
        // chnaging color of the elements before mid tO #FFAD87
        ele[low + i].style.background = '#FFAD87';
        left[i] = ele[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await wait(delay);
        console.log('In right part of array');
        console.log(ele[mid + 1 + i].style.height + ' at ' + (mid+1+i));
    // changing color of the elements after mid to #F0F696
        ele[mid + 1 + i].style.background = '#F0F696';
        right[i] = ele[mid + 1 + i].style.height;
    }

    //merging left and right arrays by sorting them simulataneously
    await wait(delay);
    
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await wait(delay);
        console.log('In merge while loop');
        console.log(parseInt(left[i]), parseInt(right[j]));    
        // change color   
        if(parseInt(left[i]) <= parseInt(right[j])){
            console.log('In merge while loop if');
            // change color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
            }  
            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            console.log('In merge while loop if');
             // change color 
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
            } 
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await wait(delay);
        console.log("If ni is left ");
          // change color 
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await wait(delay);
        console.log("If n2 is left");
          // change color 
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(ele, l, r){
    console.log('In mergeSort()');
    if(l >= r){
        console.log(`return cause just 1 elemment l=${l}, r=${r}`);
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    console.log(`left=${l} mid=${m} right=${r}`, typeof(m));
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    disableSortBtns();
    disableSize();
    disableNewArray();
    await mergeSort(ele, l, r);
    enableSortBtns();
    enableSize();
    enableNewArray();
});