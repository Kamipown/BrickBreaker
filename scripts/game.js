var Game =
{
	state: 0,
	run: false,

	start: function()
	{
		console.log("Game started.");
		Ui.hide_menu();
		this.state = 1;
		this.load(levels[0]);
		this.run = true;
		this.loop();
	},

	load: function(level)
	{
		var brick_w = Ui.size / level[0].length;
		var brick_h = 20;

		for (var y = 0; y < level.length; ++y)
		{
			for (var x = 0; x < level[y].length; ++x)
			{
				if (level[y][x] > 0)
				{
					var brick = document.createElement("span");
					brick.className = "brick";
					if (level[y][x] == 1) brick.classList.add("red");
					brick.style.width = brick_w + "px";
					brick.style.height = brick_h + "px";
					brick.style.left = x * brick_w + "px";
					brick.style.top = y * brick_h + "px";
					Ui.game_div.appendChild(brick);
				}
			}
		}
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
