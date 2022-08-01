let tl = gsap.timeline({ repeat: -1, yoyo: true });

let screenWidth = window.innerWidth;
let screenHight = window.innerHeight;

gsap.from(".logo-icon div", {
	duration: 2,
	delay: 1,
	ease: "circ.out",
	y: 0,
	yoyo: true,
});

gsap.to(".bg-icon .brain-icon", {
	duration: 5,
	ease: "sine.out",
	y: 10,
	repeat: -1,
	yoyo: true,
});

gsap.from(".gradient-text1", {
	duration: 1,
	delay: 0.5,
	opacity: 0,
	x: -50,
	ease: "circ.out",
	yoyo: true,
});

// tl.from(".code-font", {
// 	duration: 0.5,
// 	stagger: 0.1,
// 	delay: 0.5,
// 	ease: "circ.out",
// 	opacity: 0,
// 	xPercent: -100,
// 	y: -10,
// 	scale: 0.5,
// 	yoyo: true,
// })
// 	.to(".code-icon img:nth-child(1)", {
// 		duration: 2,
// 		delay: 0.5,
// 		yPercent: 200,
// 		scale: 0.5,
// 		opacity: 0,
// 		ease: "circ.out",
// 	})
// 	.to(".code-font", {
// 		duration: 1,
// 		delay: 1,
// 		stagger: 0.2,
// 		yPercent: -200,
// 		ease: "sine.out",
// 		yoyo: true,
// 	})
// 	.from(".code-icon img:nth-child(2)", {
// 		duration: 1,
// 		yPercent: 200,
// 		opacity: 1,
// 		scale: 0.5,
// 	})
// 	.to(".code-icon img:nth-child(2)", {
// 		duration: 2,
// 		delay: 2,
// 		yPercent: 200,
// 		opacity: 0,
// 		scale: 0.5,
// 	})
// 	.to(".code-font", {
// 		duration: 1.1,
// 		delay: 1.1,
// 		yPercent: -100,
// 		ease: "sine.out",
// 		yoyo: true,
// 	})
// 	.from(".code-icon img:nth-child(3)", {
// 		duration: 1,
// 		yPercent: 200,
// 		opacity: 1,
// 		scale: 0.5,
// 	})
// 	.to(".code-icon img:nth-child(3)", {
// 		duration: 2,
// 		delay: 2,
// 		yPercent: 200,
// 		opacity: 0,
// 		scale: 0.5,
// 	})
// 	.to(".code-font", {
// 		duration: 0.9,
// 		delay: 0.9,
// 		yPercent: 0,
// 		ease: "sine.out",
// 		yoyo: true,
// 	})
// 	.from(".code-icon img:nth-child(4)", {
// 		duration: 2,
// 		yPercent: 200,
// 		stagger: 0.2,
// 		opacity: 0,
// 		scale: 0.5,
// 	});

// gsap.to(".store-item div", {
// 	duration: 1,
// 	xPercent: -100,
// 	stagger: 0.2,
// 	repeat: -1,
// 	yoyo: true,
// });
