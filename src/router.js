import { createRouter, createWebHistory } from "vue-router";

import Characters from "./pages/Characters.vue";
import Character from "./pages/Character.vue";

import EpisodePage from "./pages/Episode.vue";

const routes = [
	{
		name: "characters",
		path: "/",
		component: Characters,
	},
	{
		name: "character",
		path: "/character/:characterId",
		component: Character,
	},
	{
		name: "episode",
		path: "/episode/:id",
		component: EpisodePage,
	},
];

export const router = createRouter({
	history: createWebHistory(), // process.env.BASE_URL
	routes,
});
