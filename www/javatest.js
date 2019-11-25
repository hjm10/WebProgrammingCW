var player1;
var player2;
var myObstacles = []; // Array to store all randomly-generated obstacles


/** Creates 2 players (Player 1: red square, Player 2: blue square) and initialises gameplay area */
function startGame() {
    player1 = new component(30, 30, "red", 10, 130);
    player2 = new component(30, 30, "blue", 10, 290);
    myGameArea.start();
}

var myGameArea = {
    canvas: document.createElement("canvas"),

    /** Creates initial gameplay area */
    start: function () {
        this.canvas.width = 1100;
        this.canvas.height = 450;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);

        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20); // Updates game area every 0.2s as obstacles continue to be generated

        var minutesLabel = document.getElementById("minutes");
        var secondsLabel = document.getElementById("seconds");
        var totalSeconds = 0;
        setInterval(setTime, 1000); // Updates timer every 1s

        /** Main timer function to show players the time elapsed since they started playing */
        function setTime() {
            ++totalSeconds;
            secondsLabel.innerHTML = pad(totalSeconds % 60);
            minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
        }

        /** Adds a '0' behind single-digit numbers so they are displayed on the timer properly.
         *  Leaves non single-digit numbers as is.
         */
        function pad(val) {
            var valString = val + "";
            if (valString.length < 2) {
                return "0" + valString;
            } else {
                return valString;
            }
        }

    },

    /** Gets rid of game area passed as it is continually updated with new obstacles */
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    /** Freezes gameplay (when 1 player collides with the obstacles) */
    stop: function () {
        clearInterval(this.interval);
    }

}

/** Sets up square game pieces for players */
function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    /** Updates the positions (x and y coordinates) of the game pieces as players click the corresponding buttons */
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    /** Checks if a player has collided with an obstacle, signalling game over */
    this.crashWith = function (otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

/** Continuously updates the gameplay area */
function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;

    /** Checks obstacles array and sees if either of the players has collided with an obstacle */
    for (i = 0; i < myObstacles.length; i += 1) {

        if (player1.crashWith(myObstacles[i])) {
            myGameArea.stop();      // Freezes game area/stops updating it when player 1 (red square) collides with an obstacle
            document.getElementById("message").innerHTML = "GAME OVER - PLAYER 2 (BLUE) WINS!"; // Informs players that the game is over and player 2 (blue square) wins
            return;
        }
        if (player2.crashWith(myObstacles[i])) {
            myGameArea.stop();       // Freezes game area/stops updating it when player 2 (blue square) collides with an obstacle
            document.getElementById("message").innerHTML = "GAME OVER - PLAYER 1 (RED) WINS!"; // Informs players that the game is over and player 1 (red square) wins
            return;
        }
    }
    myGameArea.clear(); // Clearing of game area passed
    myGameArea.frameNo += 1;

    /** Specifies how the randomly-generated obstacles should look like */
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;

        // Height specifications
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);

        // Specifications for how far apart the obstacles should be
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

        // Adds the obstacles generated to the array
        myObstacles.push(new component(10, height, "green", x, 0));
        myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
    }

    // Continuously updates obstacles' positions
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].speedX = -1;
        myObstacles[i].newPos();
        myObstacles[i].update();
    }

    /** Updates players' positions in the game area */
    
    player1.newPos();
    player1.update();

    
    player2.newPos();
    player2.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {
        return true;
    }
    return false;
}

/** Updates player 1's (red square) coordinates accordingly, depending on which key is pressed */
function movePlayer1(e1) {
    if (e1.keyCode == 38) { // Up arrow
        player1.speedY = -1;
    }
    if (e1.keyCode == 40) { // Down arrow
        player1.speedY = 1;
    }
    if (e1.keyCode == 39) { // Right arrow
        player1.speedX = 1;
    }
    if (e1.keyCode == 37) { // Left arrow
        player1.speedX = -1;
    }
}

/** Updates player 2's (blue square) coordinates accordingly, depending on which key is pressed */
function movePlayer2(e2) {
    if (e2.keyCode == 87) { // 'W' key
        player2.speedY = -1;
    }
    if (e2.keyCode == 83) { // 'S' key
        player2.speedY = 1;
    }
    if (e2.keyCode == 68) { // 'D' key
        player2.speedX = 1;
    }
    if (e2.keyCode == 65) { // 'A' key
        player2.speedX = -1;
    }

}

/** Uses event listener to detect when the respective controls are pressedsince both players are using the same keyboard to play
 *  (can't just use document.onkeydown)
 */
document.addEventListener('keydown', movePlayer1, false);
document.addEventListener('keydown', movePlayer2, false);