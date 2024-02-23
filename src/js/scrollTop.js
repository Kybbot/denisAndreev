export const initScrollTop = () => {
	const scrollToTopButton = document.querySelector("#scrollToTop");

	scrollToTopButton.addEventListener("click", () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	});
};
