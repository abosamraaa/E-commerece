const decreaseButton = document.getElementById('decreaseButton');
const increaseButton = document.getElementById('increaseButton');
const countElement = document.getElementById('count');

let count = 0;

decreaseButton.addEventListener('click', () => {
  if (count > 0) {
    count--;
    countElement.textContent = count;
  }
});

increaseButton.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
});
let scrollButton = document.querySelector('btt');
function scrolll(){
  scroll(0,0);
}
let menu = document.querySelector('.menu');
function showMenu(e){
  document.querySelector('.menu-list').classList.toggle('open');
}
document.addEventListener('click',function(e){
  if(e.target != menu &&document.querySelector('.menu-list')){
    if(document.querySelector('.menu-list').classList.contains('open')){
      document.querySelector('.menu-list').classList.remove('open');
    }
  }
});
document.querySelector('.menu-list').onclick = function(e){
  e.stopPropagation();
}
