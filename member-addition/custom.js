let currIndex = 0;
let currIndexPaid = 0;

const indicators = document.getElementsByClassName("screen-indicator-member");
const progressContent = document.getElementsByClassName("section-content-member")
const progressElm = document.getElementsByClassName("progress");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const nextBtnPaid = document.getElementById("next-btn-paid");
const headers = document.getElementsByClassName("header-member");
const modalHeader = document.getElementsByClassName("modal-header");
const addRelationBox = document.getElementById("add-relation");
const addRelationList = document.getElementsByClassName("add-relation");
const addRelationBoxPaid = document.getElementById("add-relation-paid");
const addRelationListPaid = document.getElementsByClassName("add-relation-paid");
const container = document.getElementsByClassName("container");
const finalContainer = document.getElementsByClassName("final-container");
const buttonContainer = document.getElementsByClassName("button-container");
const modal = document.getElementById("addFamilyMember");
const indicatorsPaid = document.getElementsByClassName("screen-indicator-paid");
const progressContentPaid = document.getElementsByClassName("section-content-paid");
const headersPaid = document.getElementsByClassName("header-paid");
const containerPaid = document.getElementsByClassName("container-paid");
const finalContainerPaid = document.getElementsByClassName("final-container-paid");
const buttonContainerPaid = document.getElementsByClassName("button-container-paid");
const modalHeaderPaid = document.getElementsByClassName("modal-header-paid");

// disableControls();
function refreshModal(){
    indicators[currIndex].classList.remove("completed");
    progressContent[currIndex].classList.remove("completed");
    headers[currIndex].classList.remove("completed");
    indicatorsPaid[currIndexPaid].classList.remove("completed");
    progressContentPaid[currIndexPaid].classList.remove("completed");
    headersPaid[currIndexPaid].classList.remove("completed");
    currIndex = 0;
    currIndexPaid = 0;
}

function addPaidMember(){
    console.log("coming")
    refreshModal();
    containerPaid[0].style.display = "block";
    finalContainerPaid[0].style.display = "none";
    modalHeaderPaid[0].style.display = "block";
    buttonContainerPaid[0].style.display = "block";
    indicatorsPaid[currIndexPaid].style.transitionDelay = "0.6s";
    indicatorsPaid[currIndexPaid].classList.add("completed");
    progressContentPaid[currIndexPaid].classList.add("completed");
    headersPaid[currIndexPaid].classList.add("completed");
    progressElm[1].style.width = `${(currIndexPaid / (indicatorsPaid.length - 1)) * 100}%`;
    nextBtnPaid.innerHTML = buttonTextChange(currIndexPaid);
}

function addFreeMember(){
    refreshModal();
    container[0].style.display = "block";
    finalContainer[0].style.display = "none";
    modalHeader[0].style.display = "block";
    buttonContainer[0].style.display = "block";
    indicators[currIndex].style.transitionDelay = "0.6s";
    indicators[currIndex].classList.add("completed");
    progressContent[currIndex].classList.add("completed");
    headers[currIndex].classList.add("completed");
    progressElm[0].style.width = `${(currIndex / (indicators.length - 1)) * 100}%`;
    nextBtn.innerHTML = buttonTextChange(currIndex);
}

function previous() {
    console.log(currIndex)
    if (currIndex <= 0) {
        return
    }

  // Delay should not be applied when removing class
  indicators[currIndex].style.transitionDelay = "0s";
  indicators[currIndex].classList.remove("completed");
  progressContent[currIndex].classList.remove("completed");
  progressContent[currIndex-1].classList.add("completed");
  headers[currIndex].classList.remove("completed");
  headers[currIndex-1].classList.add("completed");
  --currIndex;
  progressElm[0].style.width = `${(currIndex / (indicators.length - 1)) * 100}%`;
  nextBtn.innerHTML = buttonTextChange(currIndex);
//   disableControls();
}
function previousPaid() {
    console.log(currIndexPaid)
    if (currIndexPaid <= 0) {
        return
    }

  // Delay should not be applied when removing class
  indicatorsPaid[currIndexPaid].style.transitionDelay = "0s";
  indicatorsPaid[currIndexPaid].classList.remove("completed");
  progressContentPaid[currIndexPaid].classList.remove("completed");
  progressContentPaid[currIndexPaid-1].classList.add("completed");
  headersPaid[currIndexPaid].classList.remove("completed");
  headersPaid[currIndexPaid-1].classList.add("completed");
  --currIndexPaid;
  progressElm[1].style.width = `${(currIndexPaid / (indicatorsPaid.length - 1)) * 100}%`;
  nextBtnPaid.innerHTML = buttonTextChange(currIndexPaid);
//   disableControls();
}

function next() {
    console.log(currIndex)
  
  // Delay should be applied when adding class
  if(currIndex >= indicators.length - 1){

    container[0].style.display = "none";
    finalContainer[0].style.display = "block";
    modalHeader[0].style.display = "none";
    buttonContainer[0].style.display = "none";
    // setTimeout(autoCloseModal, 3000);
    return;
  }
  ++currIndex;
  indicators[currIndex].style.transitionDelay = "0.6s";
  indicators[currIndex].classList.add("completed");
  progressContent[currIndex-1].classList.remove("completed");
  progressContent[currIndex].classList.add("completed");
  headers[currIndex-1].classList.remove("completed");
  headers[currIndex].classList.add("completed");
  progressElm[0].style.width = `${(currIndex / (indicators.length - 1)) * 100}%`;
  nextBtn.innerHTML = buttonTextChange(currIndex);
//   disableControls();
}

function nextPaid() {
    console.log(currIndexPaid)
  
  // Delay should be applied when adding class
  if(currIndexPaid >= indicators.length - 1){

    containerPaid[0].style.display = "none";
    finalContainerPaid[0].style.display = "block";
    modalHeaderPaid[0].style.display = "none";
    buttonContainerPaid[0].style.display = "none";
    // setTimeout(autoCloseModal, 3000);
    return;
  }
  ++currIndexPaid;
  indicatorsPaid[currIndexPaid].style.transitionDelay = "0.6s";
  indicatorsPaid[currIndexPaid].classList.add("completed");
  progressContentPaid[currIndexPaid-1].classList.remove("completed");
  progressContentPaid[currIndexPaid].classList.add("completed");
  headersPaid[currIndexPaid-1].classList.remove("completed");
  headersPaid[currIndexPaid].classList.add("completed");
  progressElm[1].style.width = `${(currIndexPaid / (indicatorsPaid.length - 1)) * 100}%`;
  nextBtnPaid.innerHTML = buttonPaidTextChange(currIndexPaid);
  
//   disableControls();
}
function buttonTextChange(index){
    let buttonText = '';
    switch(index){
        case 0: buttonText = "Save";
                break;
        case 1: buttonText = "Send Payment Link";
                break;
        case 2: buttonText = "Send Payment Link";
                break;
        default: buttonText = "Save";
                break;
    }
    return buttonText;
}


function buttonPaidTextChange(index){
    let buttonText = '';
    switch(index){
        case 0: buttonText = "Save";
                break;
        case 1: buttonText = "Pay Now";
                break;

        default: buttonText = "Save";
                break;
    }
    return buttonText;
}
// function disableControls() {
//   if (currIndex <= 0) {
//     prevBtn.disabled = true;
//   } else if (currIndex >= indicators.length - 1) {
//     nextBtn.disabled = true;
//   } else {
//     prevBtn.disabled = false;
//     nextBtn.disabled = false;
//   }
// }

function addRelation(){
    let clone = addRelationBox.cloneNode(true);
    clone.id = '';
    addRelationBox.after(clone);
}

function addRelationPaid(){
    let clone = addRelationBoxPaid.cloneNode(true);
    clone.id = '';
    addRelationBoxPaid.after(clone);
}

// Delete Relation Member
//--------------------------

function deleteRelation(){
    if(addRelationList.length <=1){
        return;
    }
    addRelationList[addRelationList.length - 1].remove();
}

function deleteRelationPaid(){
    if(addRelationListPaid.length <=1){
        return;
    }
    addRelationListPaid[addRelationListPaid.length - 1].remove();
}


// Auto Close Modal 
// function autoCloseModal(){
//     modal.close();
// }