/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main()
{
   //your code here
   putBeeper();
   twoStep();
   twoStep();
   upKarelRight();
   twoStep();
   move();
   turnAround();
   upKarelLeft();
   turnRight();
   twoStep();
   twoStep();
   upKarelRight();
   twoStep();
   move();
   turnAround();
   upKarelLeft();
   turnRight();
   twoStep();
   twoStep();
}

function twoStep(){
   move();
   move();
   putBeeper();
}

function upKarelRight(){
   turnLeft();  
   move();
   turnLeft();
   move();
   putBeeper();
}

function upKarelLeft(){
   turnLeft();  
   move();
   putBeeper();
}

function turnAround(){
   move();
   turnLeft();
   turnLeft();
}