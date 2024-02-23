export const initProjects = () => {
	let currentProjectButton = null;
	const projectsContainer = document.querySelector(".projects__container");
	const projectsModal = document.querySelector("#projectsModal");
	const closeProjectsModal = document.querySelector("#closeProjectsModal");

	const projectBtns = document.querySelectorAll(".project__btn");

	for (const projectBtn of projectBtns) {
		projectBtn.addEventListener("click", (event) => {
			const projectName = event.target.dataset.projectname;

			projectsModal.classList.add("projectsModal--visible");
			closeProjectsModal.focus();
			document.body.style.overflow = "hidden";
		});
	}

	closeProjectsModal.addEventListener("click", () => {
		projectsModal.classList.remove("projectsModal--visible");
		document.body.style.overflow = "initial";
		currentProjectButton?.focus();
	});

	projectsContainer.addEventListener("mouseover", (event) => {
		const target = event.target;

		if (target.className === "project__btn") {
			const parent = target.parentNode;
			const btn = parent.querySelector(".project__hover");

			currentProjectButton = btn;
		}

		if (event.target.className === "projects__container") {
			currentProjectButton = null;
		}
	});
	projectsContainer.addEventListener("mouseleave", () => {
		currentProjectButton = null;
	});

	projectsContainer.addEventListener("mousemove", (event) => {
		if (currentProjectButton && event.target.className === "project__btn") {
			const layerX = event.layerX - 46;
			const layerY = event.layerY - 46;

			currentProjectButton.style.top = `${layerY}px`;
			currentProjectButton.style.left = `${layerX}px`;
		}
	});
};
