<script setup>
	import { onMounted, reactive, ref } from "vue";
	import { useRoute } from "vue-router";
	import { getSingleCharacters } from "../services/index";

	import Card from "../components/Card.vue";

	const form = reactive({
		character: ref({}),
	});
	onMounted(async () => {
		const { params } = useRoute();
		const { characterId } = params;
		characterId &&
			(await getSingleCharacters(characterId)
				.then((character) => {
					form.character = character;
				})
				.catch((e) => {
					console.error("Catch Errr: ", e);
				}));
	});
</script>

<template>
	<div>
		<div class="mx-12 py-12 min-h-screen" v-if="form.character.name">
			<div class="grid grid-cols-2 gap-8">
				<div>
					<div class="overflow-x-hidden rounded-3xl shadow-lg">
						<img
							class="h-3/4 w-full object-cover"
							src="/public/not-image.jpeg"
						/>
                        <!-- form.character.image -->
					</div>
				</div>

				<div class="text-gray-200">
					<h1 class="font-bold text-cyan-300 text-5xl">
						{{ form.character.name }}
					</h1>

					<div
						class="mt-10 grid grid-rows-1 gap-3 font-medium text-xl"
					>
						<p>Status: {{ form.character.status }}</p>
						<p>Specie: {{ form.character.species }}</p>
						<p>Type: {{ form.character.type || "Unknown" }}</p>
						<p>Gender: {{ form.character.gender }}</p>
						<p>Origin: {{ form.character.origin.name }}</p>
						<p>
							Location:
							<a class="underline" :href="form.character.location.url">{{
								form.character.location.name
							}}</a>
						</p>

						<p>Episode(s):
                            <div class="grid grid-cols-10 gap-3 mt-4">
                                <div v-for="(item, i) of form.character.episode" :key="i">
                                     <a :href="item">
                                    <div class="cursor-pointer bg-gray-600 text-center rounded-md text-cyan-500 shadow-lg">
                                        {{ i + 1 }}
                                    </div>
                                    </a>
                                </div>

                            </div>

                        </p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
