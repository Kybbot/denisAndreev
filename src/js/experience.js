export const initExperience = () => {
	const experienceCardsWrapper = document.querySelector(".experience__cards");
	const experienceCards = document.querySelectorAll(".experience__card");

	const updateExperienceCards = () => {
		if (window.innerWidth < 768) {
			for (const experienceCard of experienceCards) {
				experienceCard.style.height = "initial";
			}

			experienceCardsWrapper.style.height = "initial";
		} else {
			for (const experienceCard of experienceCards) {
				experienceCard.style.height = `initial`;
			}

			const arrOfHeights = [];
			for (const experienceCard of experienceCards) {
				arrOfHeights.push(experienceCard.getBoundingClientRect().height);
			}

			const maxHeight = Math.ceil(Math.max(...arrOfHeights));

			for (const experienceCard of experienceCards) {
				experienceCard.style.height = `${maxHeight + 16}px`;
			}

			experienceCardsWrapper.style.height = `${maxHeight + maxHeight / 7}px`;
		}
	};

	updateExperienceCards();

	window.addEventListener("resize", () => {
		updateExperienceCards();
	});
};
