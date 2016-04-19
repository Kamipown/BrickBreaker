var Game =
{
	state: 0,
	run: false,

	start: function()
	{
		console.log("Game started.");
		Ui.hide_menu();
		this.state = 1;
		this.run = true;
		this.loop();
	},

	loop: function()
	{
		if (Inputs.left && !Inputs.right)
			console.log("left");
		else if (!Inputs.left && Inputs.right)
			console.log("right");
		if (Game.run)
		{
			setTimeout(Game.loop, 16);
		}
	}
}
