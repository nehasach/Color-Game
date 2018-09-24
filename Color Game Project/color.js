var colors = ["rgb(255, 0, 0)",
				"rgb(255, 255, 0)",
				"rgb(255, 0, 255)",
				"rgb(0, 255, 0)",
				"rgb(0, 0, 255)",
				"rgb(0, 255, 255)"];

var goal=goalColor();
var rgb=document.getElementById("rgb");
rgb.textContent=goal;
var squares = document.querySelectorAll(".square");
var mess=document.getElementById("message");

for(var i=0;i<squares.length;i++){
	//add intitial colors
	squares[i].style.backgroundColor=colors[i];
	//add click listeners
	squares[i].addEventListener("click", function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===goal){
			mess.textContent="Correct";
			for(var i=0;i<squares.length;i++){
				squares[i].style.backgroundColor=goal;
			}
		}
		else{
			this.style.backgroundColor="#232323";
			mess.textContent="Try Again";
		}
	});

}

function goalColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

