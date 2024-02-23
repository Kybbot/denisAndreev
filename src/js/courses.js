export const initCourses = () => {
	const coursesItems = document.querySelectorAll(".courses__item");
	const coursesImgs = document.querySelectorAll(".courses__img");

	function changeCourse(index) {
		for (const coursesImg of coursesImgs) {
			coursesImg.classList.remove("courses__img--active");
		}

		coursesImgs[index].classList.add("courses__img--active");
	}

	coursesItems.forEach((item, index) => {
		item.addEventListener("mouseenter", () => changeCourse(index));
	});
};
