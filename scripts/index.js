var Inputs =
{
	left: false,
	right: false
}

window.addEventListener("keydown", key_down, false);
window.addEventListener("keyup", key_up, false);

function key_down(e)
{
	if (e.keyCode == 37 || e.keyCode == 65 || e.keyCode == 81)
		Inputs.left = true;
	if (e.keyCode == 39 || e.keyCode == 68)
		Inputs.right = true;
}

function key_up(e)
{
	if (e.keyCode == 13 || e.keyCode == 32)
	{

	}
	if (e.keyCode == 37 || e.keyCode == 65 || e.keyCode == 81)
		Inputs.left = false;
	if (e.keyCode == 39 || e.keyCode == 68)
		Inputs.right = false;

}

function loop()
{
	if (Inputs.left && !Inputs.right)
		console.log("left");
	else if (!Inputs.left && Inputs.right)
		console.log("right");
	setTimeout(loop, 16);
}
loop();