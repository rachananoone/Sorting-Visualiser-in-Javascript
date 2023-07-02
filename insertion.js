async function insertion(){
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    // setting color of first element to green
    ele[0].style.background = 'green';
    for(let i = 1; i < ele.length; i++){
        let j = i - 1;
        let key = ele[i].style.height;
        // change color of the comparing elements
        ele[i].style.background = '#8EA7E9';
        await wait(delay);
        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            ele[j].style.background = '#8EA7E9';
            ele[j + 1].style.height = ele[j].style.height;
            j--;
            await wait(delay);
            // change color of elements before ith element as they are sorted
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].style.height = key;
        // change color of ith element to green
        ele[i].style.background = 'green';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortBtns();
    disableSize();
    disableNewArray();
    await insertion();
    enableSortBtns();
    enableSize();
    enableNewArray();
});