/*adding comments next*/
var objImage= null;
	function init(){
		objImage=document.getElementById("Knight");				
		objImage.style.position='relative';
		objImage.style.left='0px';
		objImage.style.top='0px';       
	}

	//var player=document.getElementById("knightplayer");
	//var body=document.getElementById("body");
	 
	

    function getKeyAndMove(e){ 

		
		var key_code=e.which||e.keyCode;
		switch(key_code){
            case 32: //spacebar
            break;
			case 39: //right arrow key
				moveRight();
				break;
			case 37: // left arrow key
				moveLeft();
				break;
				
		
								
	}
    }


	 function jump(){

    }
	function moveLeft(){
		objImage.style.left=parseInt(objImage.style.left)-100 +'px';
	}
	function moveRight(){
		objImage.style.left=parseInt(objImage.style.left)+100 +'px';
	}
	









document.onkeydown = anim;

    window.onload=init;
//window.addEventListener("keydown", controller.keyListener) //execute controller. keylistener function to make controls move. 
//window.addEventListener("keyup", controller.keyListener);
//window.requestAnimationFrame(loop);


    
    

