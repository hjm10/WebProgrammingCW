/*adding comments next*/
var objImage= null;
	function init(){
		objImage=document.getElementById("Knight");				
		objImage.style.position='relative';
		objImage.style.left='0px';
		objImage.style.top='0px';
	}

	var player=document.getElementById("knightplayer");
	var body=document.getElementById("body");
	 
	Knight = {
		height: 700,
		jumping: true,
		width: 400, 
		x:144, //center of canvas
		x_velocity: 0, 
		y:0,
		y_velocity:0
	};	
	

    function getKeyAndMove(e){ 
controller ={
	left: false, 
	right:false,
	up: false,
	KeyListener: function getKeyAndMove(e){
		
		var key_code=e.which||e.keyCode;
		switch(key_code){
            //case 32: //spacebar
            //jump();
            //break;
			case 39: //right arrow key
				controller.right = key_state;
				break;
				
			case 38: //up arrow key
				controller.up = key_state; //false for key up, true for keydown,
				                      //prevents character from moving when key isnt pressed. 
				break;
			
			case 37: // left arrow key
				controller.left = key_state;
				break;
				
		
								
	}
    }
};

loop = function(){ //merging controller logic with physics. 
	
	if(controller.up && =Knight.jumping == false){ //jumping physics
		//up key presses, rectangle not jumping, want it to jump
		Knight.y_velocity -=20;//send rectangle shooting upwards 
		Knight.jumping = true;
		
	}
	
	if (controller.left){//movement code for left and right keypressed events 
		Knight.x_velocity -=0.5;//left key, subtract .5 to x velocity
	}
	
	if(controller.right){
		Knight.x_velocity +=0.5;//right key, add .5 to x velocity. 
	}
	
	Knight.y_velocity +=1.5; //simulating gravity, adds 1.5 on every frame of y velocity animation, makes rectangle fall
	Knight.x += Knight.x_velocity;//adds x velocity to current position
	Knight.y += Knight.y_velocity;//adds y velocity to current position
	Knight.x_velocity *= 0.9; //friction, effect of speed, keeps speed equal. 
	Knight.y_velocity *= 0.9; //friction
	
	//if player is falling below the floor line, this will prevent it from doing so. 
	if (Knight.y > 180 - 16 - 32){
		Knight.jumping = false;//so we can jump again
		Knight.y = 180 - 16 - 32;
		Knight.y_velocity = 0;//smooth velocity
	}
	
	//if rectangle is going off the left of the screen
	if(Knight.x < -32){
		Knight.x = 320;
		
	}
	else if (Knight.x > 320){ //if rectangle goes past right of the screen, teleported over to the left side of the screen
		Knight.x = -32;
	}
	
//call update when the browser is ready to draw again
	//window.requestAnimationFrame(loop);
};
	
	
	
	
	


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
window.addEventListener("keydown", controller.keyListener) //execute controller. keylistener function to make controls move. 
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);


    
    

