import { projectsData as data } from "./projectsData";

export const initProjects = () => {
	const createPicture = (data, element, lazyLoading) => {
		const arr = [];
		for (const item of data) {
			const tag = document.createElement(item.tag);
			if (item.src) {
				tag.alt = "";
				tag.src = item.src;
				if (lazyLoading) {
					tag.loading = "lazy";
				}
			}
			if (item.type) {
				tag.type = item.type;
			}
			if (item.media) {
				tag.media = item.media;
			}
			if (item.srcset) {
				tag.srcset = item.srcset;
			}
			if (item.class) {
				tag.classList.add(item.class);
			}
			if (item.tag === "img") {
				tag.onload = function () {
					console.log(item);
					tag.classList.add(item.visibleClass);
				};
			}
			arr.push(tag);
		}
		const picture = document.createElement("picture");
		picture.setAttribute("aria-hidden", "true");

		picture.replaceChildren(...arr);

		element.replaceChildren(picture);
	};

	const createText = (data, element) => {
		const arr = [];
		for (const item of data) {
			const p = document.createElement("p");
			p.classList.add("projectsModal__text");
			p.textContent = item;

			arr.push(p);
		}
		element.replaceChildren(...arr);
	};

	let currentProjectButton = null;
	const projectsContainer = document.querySelector(".projects__container");
	const projectsModal = document.querySelector("#projectsModal");
	const closeProjectsModal = document.querySelector("#closeProjectsModal");

	const projectsModalFirstImage = document.querySelector("#projectsModalFirstImage");
	const projectsModalSecondImage = document.querySelector("#projectsModalSecondImage");
	const projectsModalThirdImage = document.querySelector("#projectsModalThirdImage");
	const projectsModalFourthImage = document.querySelector("#projectsModalFourthImage");
	const projectsModalFifthImage = document.querySelector("#projectsModalFifthImage");

	const projectsModalTitle = document.querySelector("#projectsModalTitle");
	const projectsModalLinks = document.querySelectorAll(".projectsModal__link");
	const projectsModalServices = document.querySelector("#projectsModalServices");
	const projectsModalStatistic = document.querySelector("#projectsModalStatistic");
	const projectsModalYear = document.querySelector("#projectsModalYear");
	const projectsModalCompany = document.querySelector("#projectsModalCompany");
	const projectsModalIcon = document.querySelector("#projectsModalIconUse");
	const projectsModalDescription = document.querySelector("#projectsModalDescriptionText");

	const projectBtns = document.querySelectorAll(".project__btn");

	for (const projectBtn of projectBtns) {
		projectBtn.addEventListener("click", (event) => {
			const projectName = event.target.dataset.projectname;

			const projectData = data[projectName];

			const firstImages = data[projectName].firstImages;
			const secondImages = data[projectName].secondImages;
			const thirdImages = data[projectName].thirdImages;
			const fourthImages = data[projectName].fourthImages;
			const fifthImages = data[projectName].fifthImages;

			const services = data[projectName].services;
			const statistic = data[projectName].statistic;

			createPicture(firstImages, projectsModalFirstImage);
			createPicture(secondImages, projectsModalSecondImage, true);
			createPicture(thirdImages, projectsModalThirdImage, true);
			createPicture(fourthImages, projectsModalFourthImage, true);
			createPicture(fifthImages, projectsModalFifthImage, true);

			projectsModalTitle.textContent = projectData.title;

			for (const projectsModalLink of projectsModalLinks) {
				projectsModalLink.href = projectData.link;
			}

			createText(services, projectsModalServices);
			createText(statistic, projectsModalStatistic);

			projectsModalYear.textContent = projectData.year;
			projectsModalCompany.textContent = projectData.company;
			projectsModalIcon.href.baseVal = projectData.icon;
			projectsModalDescription.textContent = projectData.description;

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
