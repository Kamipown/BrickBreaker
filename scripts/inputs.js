var Inputs =
{
	left: false,
	right: false,

	init: function()
	{
		window.addEventListener("keydown", this.key_down, false);
		window.addEventListener("keyup", this.key_up, false);
	},

	key_down: function(e)
	{
		if (e.keyCode == 37 || e.keyCode == 65 || e.keyCode == 81)
			Inputs.left = true;
		if (e.keyCode == 39 || e.keyCode == 68)
			Inputs.right = true;
	},

	key_up: function(e)
	{
		if (e.keyCode == 13 || e.keyCode == 32)
		{
			if (Game.state == 0)
			{
				Game.start();
			}
		}
		if (e.keyCode == 37 || e.keyCode == 65 || e.keyCode == 81)
			Inputs.left = false;
		if (e.keyCode == 39 || e.keyCode == 68)
			Inputs.right = false;
	}
}
