var controller = new ScrollMagic.Controller();

var headParallaxScene = new ScrollMagic.Scene({
        triggerElement: ".Heading-Container",
        triggerHook: 0.5,
        duration: "100%"
    })
    .setTween(TweenMax.to("#parHead", 1, {y: '-30%'}))
    .addTo(controller);

var feedParallaxScene = new ScrollMagic.Scene({
		triggerElement: ".NewsFeed-Content",
		triggerHook: 0.4,
		duration: "100%"
	})
	.setTween(TweenMax.to("#parFeed", 1, {y: '-30%'}))
	.addTo(controller);