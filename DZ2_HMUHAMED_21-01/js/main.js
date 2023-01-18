

var step = 20;
var frequency = 0.2;
var intervalId = null;
 
function startMoving(block) {
  block.classList.toggle('inmove');
  intervalId = setInterval(move, frequency * 1000);
  let i = 0;
  function any(){
  i++;
  console.log("Прошло " + i + " сек.");
  if(i == 60){
  clearInterval(intervalId);
  clearInterval(id);
  
  }
}

id = setInterval(any,1000);
  
}


 
function move() {
   var block = document.querySelector('.moving');
  if(!block.classList.contains('inmove')) {
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