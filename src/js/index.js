import { animations } from "./animation";
import { initMobileMenu } from "./mobilieMenu";
import { initProjects } from "./projects";
import { initSLiders } from "./sliders";
import { initCourses } from "./courses";
import { initAdvantages } from "./advantages";
import { initScrollTop } from "./scrollTop";

document.addEventListener("DOMContentLoaded", () => {
	animations();
	initMobileMenu();
	initProjects();
	initSLiders();
	initCourses();
	initAdvantages();
	initScrollTop();
});
