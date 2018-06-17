var ball = $("#motyaBall");
var flg = true;
var margin = 0;
var displaySize = window.innerWidth;
var speed = 10;
var phoneSize = 800;
if(phoneSize > displaySize){
	speed = 1;
}
var ballMove = function(){
	if(flg == true){
		margin += speed;
	}else{
		margin -= speed;
	}
	ball.css("margin-left",margin + "px");
	if((window.innerWidth - 200) < margin){
		flg = false;
	}else if(margin < 0){
		flg = true;
		margin = 10;
	}
	setTimeout(ballMove,10);

}
ballMove();


