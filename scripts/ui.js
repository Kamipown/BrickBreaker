var Ui =
{
	main_div: undefined,
	menu_div: undefined,
		menu_h1: undefined,
		menu_p: undefined,
	game_div: undefined,
	size: undefined,

	init: function()
	{
		this.main_div = document.getElementById("main_div");
		this.menu_div = document.getElementById("menu_div");
			this.menu_h1 = document.getElementById("menu_h1");
			this.menu_p = document.getElementById("menu_p");
		this.game_div = document.getElementById("game_div");
		this.update();
	},

	update: function()
	{
		if (window.innerWidth > window.innerHeight)
		{
			this.size = window.innerHeight;
			this.main_div.style.width = this.main_div.style.height = this.size + "px";
			this.main_div.style.marginTop = "0px";
			this.main_div.style.marginLeft = (window.innerWidth - this.size) / 2 + "px";
		}
		else
		{
			this.size = window.innerWidth;
			this.main_div.style.width = this.main_div.style.height = this.size + "px";
			this.main_div.style.marginTop = (window.innerHeight - this.size) / 2 + "px";
			this.main_div.style.marginLeft = "0px";
		}

		this.menu_h1.style.height = this.size * 0.4 + "px";
		this.menu_h1.style.lineHeight = this.size * 0.4 + "px";
		this.menu_h1.style.fontSize = this.size / 10 + "px";

		this.menu_p.style.height = this.size * 0.2 + "px";
		this.menu_p.style.lineHeight = this.size * 0.2 + "px";
		this.menu_p.style.fontSize = this.size / 24 + "px";
	},

	hide_menu: function()
	{
		this.menu_div.style.display = "none";
	}
}