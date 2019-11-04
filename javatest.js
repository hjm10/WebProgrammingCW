/*adding comments next*/
var objImage= null;
var div = null;
var jumpSpeed = 1000;


	function init(){
		div=document.getElementById("Mage");
		div.style.position='relative';
        div.style.left='0px';
        div.style.top='0px';				
		
	}

	//var player=document.getElementById("knightplayer");
	//var body=document.getElementById("body");
	 
	

    function getKeyAndMove(e){ 

		
		var key_code=e.which||e.keyCode;
		switch(key_code){

			    case 37: //left arrow key
					   moveLeft();
					   break;
				case 32: //spacebar
				
					   break;
				case 39: //right arrow key
					   moveRight();
					   break;
				
								
	}
    }

  



	function moveLeft(){
 
		div.style.left=parseInt(div.style.left)-100 +'px';
	}
	
	function moveRight(){
		div.style.left=parseInt(div.style.left)+100 +'px';
	}

	function jump(){
		div.y -= 25;
		setTimeout(function () {
			div.y = characterGround;
			stage.update();
		}, jumpSpeed);
	}
	window.onload=init;
   // end if
	
  
	

	





 
    

