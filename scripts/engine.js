var Engine =
{
	init: function()
	{
		Ui.init();
		Inputs.init();

		window.addEventListener("resize", Ui.update, false);
	}
}
