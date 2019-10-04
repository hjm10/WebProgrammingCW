/*adding comments next*/
var objImage= null;
	function init(){
		objImage=document.getElementById("monster");				
		objImage.style.position='relative';
		objImage.style.left='0px';
		objImage.style.top='0px';
	}
	function getKeyAndMove(e){				
		var key_code=e.which||e.keyCode;
		switch(key_code){
            case 32: //spacebar
            jump();
            break;
			case 37: //left arrow key
				moveLeft();
				break;
			case 39: //right arrow key
				moveRight();
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
	
    window.onload=init;
    
    

