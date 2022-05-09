const closeBtn = document.getElementById('js-close-btn');
const deleteCancel = document.getElementById('js-delete-cancel');
const nodePopUp = document.querySelector('.delete-popup-bg');


function openDeletePopUP() {
    nodePopUp.classList.add('toggleBtn');
}

deleteCancel.onclick = function() {
    nodePopUp.classList.remove('toggleBtn');
}

closeBtn.onclick = function() {
    nodePopUp.classList.remove('toggleBtn');
}


