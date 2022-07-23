let tl = gsap.timeline({ repeat: -1, yoyo: true });

tl.from(".code-font", {
	duration: 0.5,
	stagger: 0.1,
	delay: 0.5,
	ease: "circ.out",
	opacity: 0,
	xPercent: -100,
	y: -10,
	scale: 0.5,
	yoyo: true,
})
	.to(".code-font", {
		duration: 1,
		delay: 1,
		stagger: 0.2,
		yPercent: -200,
		ease: "sine.out",
		yoyo: true,
	})
	.to(".code-font", {
		duration: 1.1,
		delay: 1.1,
		yPercent: -100,
		ease: "sine.out",
		yoyo: true,
	})
	.to(".code-font", {
		duration: 0.9,
		delay: 0.9,
		yPercent: 0,
		ease: "sine.out",
		yoyo: true,
	});
