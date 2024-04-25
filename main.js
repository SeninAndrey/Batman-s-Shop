
// Mark as favorite

let favoritesList = document.querySelectorAll('.card__favorites');

favoritesList.forEach(item => item.addEventListener('click', function () {
    console.log(item);
    item.classList.toggle('card__favorites--active');
}))

// Modal close

let body = document.querySelector('body');
let modal = document.querySelector('.modal');
let modalCloseBtn = document.querySelector('.modal__accept');

modalCloseBtn.addEventListener('click', function ()  {
    modal.classList.remove('modal--show');
    body.classList.remove('noScroll');
})

// Promo countdown

const PromoTimerHours = 20; 

let timerId = null;
const timerElement = document.querySelector('.timer__time');

const formatDigit = (number) => {
    return number < 10 ? '0' + number : number;
}

const promoTimerInterval = (timeInHours) => {
    let seconds = timeInHours * 60 * 60;
    clearInterval(timerId);
    timerId = setInterval(coundown, 1000);

    function coundown() {
        let hoursRemain = Math.trunc(seconds / (60 * 60));
        let minutesRemain= Math.trunc(seconds / 60) - hoursRemain * 60;
        let secondsRemain = seconds % 60;

        timerElement.innerHTML = hoursRemain + ':' + formatDigit(minutesRemain) + ':' + formatDigit(secondsRemain);

        seconds = seconds > 0 ? --seconds : 0;        
        if (seconds === 0) {
            clearInterval(timerId);
        }
    }
}

promoTimerInterval(PromoTimerHours);
