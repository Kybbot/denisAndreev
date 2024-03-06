import { animations } from "./animation";
import { initMobileMenu } from "./mobilieMenu";
import { initProjects } from "./projects";
import { initExperience } from "./experience";
import { initSLiders } from "./sliders";
import { initCourses } from "./courses";
import { initAdvantages } from "./advantages";
import { initScrollTop } from "./scrollTop";

document.addEventListener("DOMContentLoaded", () => {
	animations();
	initMobileMenu();
	initProjects();
	initExperience();
	initSLiders();
	initCourses();
	initAdvantages();
	initScrollTop();
});
