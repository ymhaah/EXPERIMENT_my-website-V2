// ////////////////////////////////////////////////////////////////////////
// function toggle(Butt1, Class1, Butt2, Class2) {
// 	Butt1.classList.toggle(Class1);
// 	Butt2.classList.toggle(Class2);
// }
// function reAdd(Butt1, Class1, Butt2, Class2) {
// 	// Butt1 => remove , Butt2 => add
// 	Butt1.classList.remove(Class1);
// 	Butt2.classList.add(Class2);
// }

// ////////////////////////////////////////////////////////////////////////
// // for the phone nav list function
// let navListButton = document.querySelector(".nList");
// let phoneNavList = document.querySelector("header .Container nav");

// navListButton.onclick = function () {
// 	toggle(navListButton, "navList", phoneNavList, "exbend");
// };
// window.onscroll = function () {
// 	navListButton.classList.remove("navList");
// 	phoneNavList.classList.remove("exbend");
// };
// ////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////
// // scroll to top button
// let scrollTop = document.querySelector(".scroll-Top");
// scrollTop.onclick = function () {
// 	window.scrollTo(0, 0);
// };

// ////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////

// let imges = [...document.querySelectorAll("img")];

// /* Adding the attribute loading="lazy" to all images on the page. */
// imges.forEach((element) => {
// 	element.setAttribute("loading", "lazy");

// 	if (
// 		!element.hasAttribute("alt") ||
// 		element.getAttribute("alt") == "" ||
// 		element.getAttribute("alt") == null
// 	) {
// 		element.setAttribute("alt", "good image");
// 	}
// });

// let sections = [...document.querySelectorAll("section")];

// /* Adding the attribute aria-labelledby to all sections on the page. */
// sections.forEach((element) => {
// 	if (!element.hasAttribute("aria-labelledby")) {
// 		element.setAttribute("aria-labelledby", "section");
// 	}
// });

////////////////////////////////////////////////////////////////////////
//observer
////////////////////////////////////////////////////////////////////////

// let aboutUs = document.querySelector(".about");
// let turnBrowne = document.querySelector(".blue-shoes");

// let options = {
// 	root: null,
// 	threshold: 0,
// 	rootMargin: "",
// };

// let observer = new IntersectionObserver(function (entries, observer) {
// 	entries.forEach(function (entry) {
// 		if (entry.isIntersecting) {
// 			turnBrowne.classList.add("turn-browne");
// 		} else {
// 			turnBrowne.classList.remove("turn-browne");
// 		}
// 	});
// }, options);

// observer.observe(aboutUs);
////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////

// let lines = [...document.querySelectorAll(".line")];
// let content = [...document.querySelectorAll(".artc")];
// let special = "";

// lines.forEach(function (ele) {
// 	ele.onclick = function () {
// 		special = ele;
// 		for (let i = 0; i < lines.length; i++) {
// 			if (lines[i] == special) {
// 				lines[i].classList.add("act");
// 				content[i].classList.add("vis");
// 			} else if (lines[i] != special) {
// 				lines[i].classList.remove("act");
// 				content[i].classList.remove("vis");
// 			}
// 		}
// 	};
// });
