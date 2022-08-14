const backTop = document.querySelector(".back-to-top");
const navbar = document.querySelector(".navbar");
const hamburgerMenu = document.querySelector(".hamburger_menu");
const navLinksContainer = document.querySelector(".links-container");
const navLinks = document.querySelector(".links");
const scrollLinks = document.querySelectorAll(".scroll-link");

// Background Music
// let audio = new Audio("/assets/sound/pangolin-mas-1.wav");

hamburgerMenu.addEventListener("click", () => {
	hamburgerMenu.classList.toggle("change");

	let containerHeight = navLinksContainer.getBoundingClientRect().height;
	let linksHeight = navLinks.getBoundingClientRect().height;

	if (containerHeight === 0) {
		navLinksContainer.style.height = `${linksHeight}px`;
	} else {
		navLinksContainer.style.height = "0px";
	}
});

// Scroll to top
backTop.addEventListener("click", () => {
	window.scrollTo({ left: 0, top: 0 });
});

scrollLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		let id = e.target.getAttribute("href").slice(1);
		const element = document.getElementById(id);

		// Calculating heights
		let navbarHeight = navbar.getBoundingClientRect().height;
		const containerHeight =
			navLinksContainer.getBoundingClientRect().height;
		const fixedNav = navbar.classList.contains("fixed-navbar");

		let position = element.offsetTop - navbarHeight;

		if (!fixedNav) {
			position -= navbarHeight;
		}

		if (navbarHeight > 104) {
			position += containerHeight;
		}

		window, scrollTo({ left: 0, top: position });
		hamburgerMenu.click();
		if ((hamburgerMenu.style.display = "none")) {
			hamburgerMenu.classList.remove("change");
		}
	});
});

// Fixed navbar and back-to-top button
window.addEventListener("scroll", () => {
	const scrollHeight = window.pageYOffset;
	let navbarHeight = navbar.getBoundingClientRect().height;

	if (scrollHeight > navbarHeight) {
		navbar.classList.add("fixed-navbar");
	} else {
		navbar.classList.remove("fixed-navbar");
	}

	if (scrollHeight > 500) {
		backTop.style.visibility = "visible";
	} else {
		backTop.style.visibility = "hidden";
	}
});

new WOW().init();
