import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

import { animations } from "./animation";

document.addEventListener("DOMContentLoaded", () => {
	animations();
});

const swiper = new Swiper(".swiper", {
	modules: [Navigation],
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	spaceBetween: 16,
	slidesPerView: 1,
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 24,
		},
		// 1024: {
		// 	slidesPerView: 1,
		// 	spaceBetween: 24,
		// },
	},
});

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

let currentProject = null;
let currentProjectButton = null;
const projectsContainer = document.querySelector(".projects__container");

projectsContainer.addEventListener("mouseover", (event) => {
	const target = event.target;

	if (target.className === "project__hover") {
		const parent = target.parentNode;
		const btn = parent.querySelector(".project__btn");

		currentProject = parent;
		currentProjectButton = btn;
	}

	if (event.target.className === "projects__container") {
		currentProject = null;
		currentProjectButton = null;
	}
});
projectsContainer.addEventListener("mouseleave", () => {
	currentProject = null;
	currentProjectButton = null;
});

projectsContainer.addEventListener("mousemove", (event) => {
	if (currentProjectButton && event.target.className === "project__hover") {
		const layerX = event.layerX - 46;
		const layerY = event.layerY - 46;

		currentProjectButton.style.top = `${layerY}px`;
		currentProjectButton.style.left = `${layerX}px`;
	}
});

const experienceCard = document.querySelector(".experience__card");
const experienceCards = document.querySelector(".experience__cards");
const experienceCardHeight = experienceCard.getBoundingClientRect().height;
experienceCards.style.height = `${experienceCardHeight + 75}px`;

const coursesItems = document.querySelectorAll(".courses__item");
const coursesImgs = document.querySelectorAll(".courses__img");

function changeFilm(index) {
	for (const coursesImg of coursesImgs) {
		coursesImg.classList.remove("courses__img--active");
	}

	coursesImgs[index].classList.add("courses__img--active");
}

coursesItems.forEach((item, index) => {
	item.addEventListener("mouseenter", () => changeFilm(index));
});

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

const scrollToTopButton = document.querySelector("#scrollToTop");

scrollToTopButton.addEventListener("click", () => {
	window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
