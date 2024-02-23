import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

import { animations } from "./animation";

document.addEventListener("DOMContentLoaded", () => {
	animations();
});

const slider1 = document.querySelector(".reviews__slider1");
const slider2 = document.querySelector(".reviews__slider2");

const currentSlideSpan1 = document.querySelector(".reviews__slideNumber--current1");
const allSlidesSpan1 = document.querySelector(".reviews__slideNumber--all1");
const slidescCount1 = document.querySelectorAll(".reviews__slider1 .reviews__slide").length;

const currentSlideSpan2 = document.querySelector(".reviews__slideNumber--current2");
const allSlidesSpan2 = document.querySelector(".reviews__slideNumber--all2");
const slidescCount2 = document.querySelectorAll(".reviews__slider2 .reviews__slide").length;

const customersText = document.querySelector(".reviews__switchText1");
const temaText = document.querySelector(".reviews__switchText2");
const slidersCheckbox = document.querySelector("#slidersCheckbox");

slidersCheckbox.addEventListener("change", (event) => {
	if (event.target.checked) {
		slider1.style.display = "none";
		slider2.style.display = "block";
		customersText.classList.remove("reviews__switchText--active");
		temaText.classList.add("reviews__switchText--active");
	} else {
		slider1.style.display = "block";
		slider2.style.display = "none";
		customersText.classList.add("reviews__switchText--active");
		temaText.classList.remove("reviews__switchText--active");
	}
});

const swiper1 = new Swiper(".reviews__slider1", {
	modules: [Navigation],
	navigation: {
		nextEl: ".swiper-button-next1",
		prevEl: ".swiper-button-prev1",
	},
	spaceBetween: 16,
	slidesPerView: 1,
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 24,
		},
	},
});

const swiper2 = new Swiper(".reviews__slider2", {
	modules: [Navigation],
	navigation: {
		nextEl: ".swiper-button-next2",
		prevEl: ".swiper-button-prev2",
	},
	spaceBetween: 16,
	slidesPerView: 1,
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 24,
		},
	},
});

allSlidesSpan1.textContent = `${slidescCount1}`;

swiper1.on("slideChange", (event) => {
	if (event.isEnd) {
		currentSlideSpan1.textContent = `${swiper1.slides.length}`;
	} else {
		currentSlideSpan1.textContent = `${event.activeIndex + 1}`;
	}
});

allSlidesSpan2.textContent = `${slidescCount2}`;

swiper2.on("slideChange", (event) => {
	if (event.isEnd) {
		currentSlideSpan2.textContent = `${swiper2.slides.length}`;
	} else {
		currentSlideSpan2.textContent = `${event.activeIndex + 1}`;
	}
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
