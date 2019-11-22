var player = document.getElementById("Mage");
var player2 = document.getElementById("Rouge");

var left = 0;
var jump = 0;

function move(e) {
	if (e.keyCode == 32) {
		var x = 0;

		var interval = setInterval(function () {
			x++;
			Mage.style.top = 90 - (-0.2 * x * (x - 82)) + 'px';
			Rouge.style.top = 90 - (-0.2 * x * (x - 82)) + 'px';

			if (x >= 90) clearInterval(interval);
		}, 20);

	}
	if (e.keyCode == 39) {
		left += 25;
		Mage.style.left = (parseInt(left) + left) + "px";
		Rouge.style.left = (parseInt(left) + left) + "px";
	}
	if (e.keyCode == 37) {
		left -= 25;
		Mage.style.left = (parseInt(left) + left) + "px";
		Rouge.style.left = (parseInt(left) + left) + "px";
	}
	
}
			


document.onkeydown = move;


function monsterRun() {
	        let start = Date.now(); // remember start time
	        let timer = setInterval(function () {
	            // how much time passed from the start?
	            let timePassed = Date.now() - start;
	            if (timePassed >= 6000) {
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
	        window.innerWidth = 500;
	        if(innerWidth >= 0){
	        monster.style.left = timePassed / 5 + 'px';
	        }
	        else{
	        monster.style.left = timePassed / 5 - 'px';
	        }
	    }
	    setInterval(monsterRun, 5100);

	function checkCollision(elm1,elm2) {
		var elm1Rect = elm1.getBoundingClientRect();
		var elm2Rect = elm2.getBoundingClientRect();
	  
		 return(elm1Rect.right >= elm2Rect.left &&
			elm1Rect.left <= elm2Rect.right) &&
		  (elm1Rect.bottom >= elm2Rect.top &&
			elm1Rect.top <= elm2Rect.bottom)
			
			
	  }
	
	  function alert() {

		if (checkCollision(player, monster)) {
		 alert("You have died");
		}
	  }
	
