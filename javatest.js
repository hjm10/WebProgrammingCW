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

			    case 37: //left arrow key
					   moveLeft();
					   break;
				case 38: //up arrow key
					   moveUp();
					   break;
				case 39: //right arrow key
					   moveRight();
					   break;
				case 40: //down arrow key
					   moveDown();
					   break;
								
	}
    }

  



	function moveLeft(){
 
		objImage.style.left=parseInt(objImage.style.left)-100 +'px';
	}
	
	function moveRight(){
		objImage.style.left=parseInt(objImage.style.left)+100 +'px';
	}
	

	


    window.onload=init;



    
    

