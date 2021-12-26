<script setup>
	import { onMounted, reactive, ref } from "vue";

	import Search from "../components/Search.vue";
	import Card from "../components/Card.vue";
	import Filter from "../components/Filter.vue";

	import { getAllCharacters } from "../services/index";

	const form = reactive({
		results: ref([]),
	});

	onMounted(async () => {
		await getAllCharacters()
			.then(({ results, info }) => {
				form.results = results;
			})
			.catch((e) => {
				console.error("Catch Errr: ", e);
			});
	});
</script>

<template>
	<div>
		<h1
			class="
				text-4xl
				font-bold
				text-center
				justify-center
				pt-8
				text-cyan-300
			"
		>
			Rick And Morty
		</h1>
		<Search></Search>

		<Filter></Filter>

		<div>
			<div
				class="
					mx-12
					min-h-screen
					grid grid-cols-1
					gap-3
					mt-6
					sm:mt-10 sm:grid-cols-2
					lg:grid-cols-4
				"
			>
				<Card
					v-for="(item, i) of form.results"
					v-if="form.results.length > 0"
					:key="i"
					:data="item"
				>
				</Card>
			</div>
		</div>
		>
	</div>
</template>

<style></style>
