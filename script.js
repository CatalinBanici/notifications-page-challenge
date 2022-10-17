
function setToRead() {
    
    const notification = document.querySelectorAll('.notification').forEach(function(element){
        element.addEventListener('click', function(event){
            event.target.classList.remove('new-notification');   
        });
    });
}

setToRead();
