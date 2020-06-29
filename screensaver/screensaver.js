
function menuShow() {
  var element = document.getElementById("box");
  element.classList.toggle("style");
}

/**
 * Example of starting a plugin with options.
 * I am just passing some of the options in the following example.
 * you can also start the plugin using $('.marquee').marquee(); with defaults
*/
$('.marquee').marquee({
	//duration in milliseconds of the marquee
	duration: 3000,
	//gap in pixels between the tickers
	gap: 30,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true,
  pauseOnHover: true
});

$('.marquee2').marquee({
	duration: 4500,
	gap: 30,
	delayBeforeStart: 0,
	direction: 'left',
	duplicated: true,
  pauseOnHover: true
});

$('.marquee3').marquee({
	duration: 1300,
	gap: 30,
	delayBeforeStart: 0,
	direction: 'left',
	duplicated: true,
  pauseOnHover: true
});

$('.marquee4').marquee({
	duration: 2200,
	gap: 30,
	delayBeforeStart: 0,
	direction: 'left',
	duplicated: true,
  pauseOnHover: true
});
