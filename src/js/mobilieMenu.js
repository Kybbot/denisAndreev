export const initMobileMenu = () => {
	const mobileMenu = document.querySelector("#mobileMenu");
	const headerMenuButton = document.querySelector("#headerMenu");
	const mobileMenuLinks = document.querySelectorAll(".mobileMenu__li");
	const closeMobileMenuButton = document.querySelector("#closeMobileMenu");

	headerMenuButton.addEventListener("click", () => {
		mobileMenu.classList.add("mobileMenu--visible");
		closeMobileMenuButton.focus();
		document.body.style.overflow = "hidden";
	});

	closeMobileMenuButton.addEventListener("click", () => {
		mobileMenu.classList.remove("mobileMenu--visible");
		document.body.style.overflow = "initial";
		headerMenuButton.focus();
	});

	for (const mobileMenuLink of mobileMenuLinks) {
		mobileMenuLink.addEventListener("click", () => {
			mobileMenu.classList.remove("mobileMenu--visible");
			document.body.style.overflow = "initial";
		});
	}
};
