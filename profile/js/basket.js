const closeBtn = document.getElementById('js-close-btn');
const deleteCancel = document.getElementById('js-delete-cancel');
const nodeDeletePopUp = document.querySelector('.delete-popup-bg');


function openDeletePopUP() {
    nodeDeletePopUp.classList.add('toggleBtn');
}

deleteCancel.onclick = function() {
    nodeDeletePopUp.classList.remove('toggleBtn');
}

closeBtn.onclick = function() {
    nodeDeletePopUp.classList.remove('toggleBtn');
}

// buy popup 
const nodeBuyPopUp = document.querySelector('.buy-popup-bg');

function openBuyPopUp() {
    nodeBuyPopUp.classList.add('toggleBtn');
}
// buy popup 


// checkout popup 
const nodeCheckoutPopUp = document.querySelector('.checkout-popup-bg');

function openCheckoutPopUp() {
    nodeCheckoutPopUp.classList.add('toggleBtn');
}

// checkout popup 




window.onclick = function(event) {
    if(event.target == nodeCheckoutPopUp)  {
        nodeCheckoutPopUp.classList.remove('toggleBtn');
    }
    if(event.target == nodeDeletePopUp)  {
        nodeDeletePopUp.classList.remove('toggleBtn');
    }
}

