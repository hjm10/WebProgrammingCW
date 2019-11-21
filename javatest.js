const overlay = document.getElementById('overlay');
const startbutton = document.querySelector('.start-button');

startbutton.addEventListener('click', () => {
	overlay.style.display = "none";
	if (reset === true && missed === die) {
		resetGame();
	} else if (reset === true && missed != die){
		resetGame();
	}
});



var player = document.getElementById("Mage");
var left = 0;
var jump = 0;

function move(e){
    if(e.keyCode == 32 ){
	 var x = 0;

	var interval = setInterval(function() {
		x++;
		Mage.style.top = 80 - (-0.2 * x * (x - 80)) + 'px';
	
		if(x >= 80) clearInterval(interval);
	}, 10);
        
    }
    if(e.keyCode == 39){
        left+= 40;
        Mage.style.left = (parseInt(left) + left) + "px";
    }
    if(e.keyCode == 37 ){
        left -= 50;
        Mage.style.left = (parseInt(left) + left) + "px";
    }
}




function monsterRun(){
	let start = Date.now(); // remember start time
	let timer = setInterval(function() {
	  // how much time passed from the start?
	  let timePassed = Date.now() - start;
	  if (timePassed >= 10000) {
	    clearInterval(timer); // finish the animation after 2 seconds
	    return;
	  }
	  // draw the animation at the moment timePassed
	  draw(timePassed);
	}, 20);
	}
	// as timePassed goes from 0 to 2000
	// left gets values from 0px to 400px
	function draw(timePassed) {
	  monster.style.left = timePassed / 5 + 'px';
	}
setTimeout(monsterRun,10000);
	document.onkeydown = move;

	(function() {

		var preload = document.getElementById("preload");
		var loading = 0;
		var id = setInterval(frame, 64);

		function frame() {
			if(loading == 100){
				clearInterval(id);
				window.open("welcome.html", "_self");
			} else {
				loading = loading + 1;
				if(loading == 90){
					preload.style.animation = "fadeout 1s ease";
				}
			}
		}

	})();