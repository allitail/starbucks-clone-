const headerEl = document.querySelector('.header');
const updowBtn = document.querySelector('.up');
let isHideUpDown = false;
updowBtn.addEventListener('click', function() {
    isHideUpDown = !isHideUpDown
    if(isHideUpDown) {
       headerEl.classList.add('hide');
    } else {
       headerEl.classList.remove('hide');
    }
});