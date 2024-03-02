export const initProjects = () => {
	const data = {
		Domova: {
			title: "Domova",
			link: "https://domova.com/en/",
			services: ["Brand design", "UX/ UI design", "Vue.js", "Laravel", "WordPress"],
			statistic: ["Team of 12 specialists", "11 months full solution development"],
			year: "2023",
			company: "Solar Digital",
			icon: "/icons.svg#domova",
			description:
				"Domova is the only platform in the world that brings together owners of apartments and non-residential premises of a dilapidated or emergency building to jointly sell the entire building to investors or construction companies.",
		},
		Sustayn: {
			title: "Sustayn",
			link: "https://sustayn.eu/",
			services: ["Brand design", "UX/ UI design", "WordPress"],
			statistic: ["Team of 7 specialists", "4 months full solution development"],
			year: "2022",
			company: "Solar Digital",
			icon: "/icons.svg#sustayn",
			description:
				"The client specializes in the agricultural production of ecological products. The results of his work are to combat global warming, improve the quality of the soil he uses, develop the bioeconomy and build sustainable biomass supply chains.",
		},
		Derjy: {
			title: "Держу в курсе",
			link: "#",
			services: [],
			statistic: [],
			year: "",
			company: "",
			icon: "/icons.svg#derjy",
			description: "",
		},
		Kachka: {
			title: "KACHKA",
			link: "#",
			services: [
				"Brand design",
				"3D design",
				"Motion design",
				"UX/ UI design",
				"Vue.js  development",
				"Smart contract development",
			],
			statistic: ["Team of 10 specialists", "5 months of full product development"],
			year: "2022",
			company: "KachKa",
			icon: "/icons.svg#kachka",
			description:
				"The Kach.NFT team of like-minded people has developed a patriotic collection of 'biological weapons' that protects Ukrainian borders. «Battle ducks» is an irony over Russian propaganda, Ukrainian biological weapons for eliminating the enemies of Ukraine.",
		},
	};

	let currentProjectButton = null;
	const projectsContainer = document.querySelector(".projects__container");
	const projectsModal = document.querySelector("#projectsModal");
	const closeProjectsModal = document.querySelector("#closeProjectsModal");

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

			const services = data[projectName].services;
			const statistic = data[projectName].statistic;

			projectsModalTitle.textContent = projectData.title;

			for (const projectsModalLink of projectsModalLinks) {
				projectsModalLink.href = projectData.link;
			}

			const arrOfServices = [];
			for (const item of services) {
				const p = document.createElement("p");
				p.classList.add("projectsModal__text");
				p.textContent = item;

				arrOfServices.push(p);
			}
			projectsModalServices.replaceChildren(...arrOfServices);

			const arrOfStatistic = [];
			for (const item of statistic) {
				const p = document.createElement("p");
				p.classList.add("projectsModal__text");
				p.textContent = item;

				arrOfStatistic.push(p);
			}
			projectsModalStatistic.replaceChildren(...arrOfStatistic);

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
