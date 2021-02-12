let lastChecked = -1;
const inputList = [...document.querySelectorAll('input')];

const holdShiftCheckUncheck = (event) => {
    const checkbox = event.target;
    const idx = inputList.indexOf(checkbox);


    if(event.shiftKey){
        if(lastChecked < inputList.indexOf(checkbox)){
            for(let i = lastChecked; i <=idx; i++){

                inputList[lastChecked].checked === true ? inputList[i].checked = true : inputList[i].checked = false;
            }
        }else{
            for(let i = lastChecked; i>=idx; i--){

                inputList[lastChecked].checked === true ? inputList[i].checked = true : inputList[i].checked = false;
            }
        }
    }

    lastChecked = idx;
}

inputList.forEach((input) =>{
    input.addEventListener('click', holdShiftCheckUncheck);
});

