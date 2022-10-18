const notificationList = document.querySelectorAll('li');



notificationList.forEach(function(item){
    item.children[1].addEventListener('click', function(){
        // removing the blue-ish background color of the notification li
        const paraSelector = item.children[1];
        paraSelector.parentElement.classList.remove('new-notification');
        // removing the orange dot
        const iconSelector = item.children[1].children[0].children[2];
        iconSelector.removeChild(iconSelector.firstElementChild);        
    });
});



