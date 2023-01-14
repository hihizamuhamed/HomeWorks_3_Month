const phoneInput = document.querySelector("#phoneInput")
const phoneCheck = document.querySelector(".phoneCheck")
const phoneResult = document.querySelector(".phoneResult")

const regExp = /^\+996 [5|7|9]\d{2} \d{2}-\d{2}-\d{2}$/

phoneCheck.addEventListener("click", ()=>{
    if(regExp.test(phoneInput.value)){
        phoneResult.innerText = "ok :)"
        phoneResult.style.color = "green"
    } else {
        phoneResult.innerText = "not ok :("
        phoneResult.style.color = "red"
    }
})

const inputs = document.querySelectorAll('input ')
const patterns ={
    password:/^[\w@-]{8,20}$/,
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};
function validate(field,regex){
    if (regex.test(field.value)) {
        field.className='valid';
    }else {
        field.className='invalid';
    }
}
inputs.forEach((input) =>{
    input.addEventListener('keyup',(e)=>{
        validate(e.target,patterns[e.target.attributes.name.value]);
    })
})

var step = 20;
var frequency = 0.2;
var intervalId = null;
 
function startMoving(block) {
  block.classList.toggle('inmove');
  intervalId = setInterval(move, frequency * 1000);
}
 
function move() {
   var block = document.querySelector('.moving');
  if(!block.classList.contains('inmove')) {
    clearInterval(intervalId);
    return;
  }
  
  var container = block.parentElement;
  
  var currentX = block.offsetLeft;
  var currentY = +block.offsetTop;;
  
  if(!(direction = +block.dataset.direction)){
    var direction = +(block.dataset.direction = 1);
  }
  
  newX = direction % 2 ? currentX : currentX + (3 - direction) * step;
  newY = direction % 2 ? currentY + (direction - 2) * step : currentY;
  
  if(newX < 0 || newX > +container.clientWidth - block.clientWidth
  || newY < 0 || newY > +container.clientHeight - block.clientHeight) {
    direction ++;
    if(direction === 5) direction = 1;
    block.dataset.direction = direction;
    move();
  } else {
    block.style.left = '' + newX + 'px';
    block.style.top = '' + newY + 'px';;
  }    
}