let notificationList = document.querySelectorAll('li');
let markAllAsRead = document.querySelector('.mark-all');
let notificationNumber = document.querySelector('.notif-number');
let notificationUnread = document.querySelectorAll('.new-notification');


let notifArr = [];

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
            const classN = item.classList[1];
            
            notifArr.push(classN);
                    
            notificationNumber.innerHTML = notifArr.length;
            
        });
  
    });
              
}
setToRead();







