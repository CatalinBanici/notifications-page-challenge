const notificationList = document.querySelectorAll('li');
const markAll = document.querySelector('.mark-all');
const notificationCounter = document.querySelector('.notif-number');

function setToRead() {
    
    notificationList.forEach(function(item){
        item.children[1].addEventListener('click', function(){
            // removing the blue-ish background color of the notification li
            const paraSelector = item.children[1];
            paraSelector.parentElement.classList.remove('new-notification');

            // removing the orange dot
            const iconSelector = item.children[1].children[0].children[2];
            iconSelector.removeChild(iconSelector.firstElementChild);   

            // updating the counter           
            notificationCounter.innerHTML--                
        }, { once: true });              
    }); 
       
}

function markAllAsRead() {

    notificationList.forEach(function(item){
        markAll.addEventListener('click', function(){
            // removing the blue-ish background color of the notification li
            const paraSelector = item.children[1];
            paraSelector.parentElement.classList.remove('new-notification');

            // removing the orange dot
            const iconSelector = item.children[1].children[0].children[2];
            iconSelector.removeChild(iconSelector.firstElementChild);   

            // updating the counter           
            notificationCounter.innerHTML--                
        }, { once: true });              
    }); 
    
}

setToRead();
markAllAsRead();






