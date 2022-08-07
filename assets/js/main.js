// $("document").ready(function () {
// Back to top
// 	var backTop = $(".back-to-top");

// 	$(window).scroll(function () {
// 		if ($(document).scrollTop() > 400) {
// 			backTop.css("visibility", "visible");
// 		} else if ($(document).scrollTop() < 400) {
// 			backTop.css("visibility", "hidden");
// 		}
// 	});

// 	backTop.click(function () {
// 		$("html").animate(
// 			{
// 				scrollTop: 0,
// 			},
// 			1000
// 		);
// 		return false;
// 	});
// });
const hamburgerMenu = document.querySelector(".hamburger_menu");
const navLinks = document.querySelector(".links")

hamburgerMenu.addEventListener("click", () => {
	hamburgerMenu.classList.toggle("change");
	navLinks.classList.toggle("show-links")
});
