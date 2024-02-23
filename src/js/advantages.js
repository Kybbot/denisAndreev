export const initAdvantages = () => {
	const scrollers = document.querySelectorAll(".advantages__scroller");

	function addAnimation() {
		for (const scroller of scrollers) {
			scroller.setAttribute("data-animated", true);

			const scrollerInner = scroller.querySelector(".advantages__inner");
			const scrollerContent = Array.from(scrollerInner.children);

			for (const item of scrollerContent) {
				const duplicatedItem = item.cloneNode(true);
				duplicatedItem.setAttribute("aria-hidden", true);
				scrollerInner.appendChild(duplicatedItem);
			}
		}
	}

	if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		addAnimation();
	}
};
