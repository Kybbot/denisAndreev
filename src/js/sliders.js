import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

export const initSLiders = () => {
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
};
