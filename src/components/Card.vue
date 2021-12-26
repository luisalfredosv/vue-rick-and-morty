<script setup>
	defineProps({
		data: {
			type: Object,
			required: true,
			// id: {
			// 	type: Number,
			// 	required: true,
			// },
			// name: {
			// 	type: String,
			// 	required: true,
			// },
			// status: {
			// 	type: String,
			// 	required: true,
			// },
			// species: {
			// 	type: String,
			// 	required: true,
			// },
			// type: {
			// 	type: String,
			// 	required: true,
			// },
			// gender: {
			// 	type: String,
			// 	required: true,
			// },
			// origin: {
			// 	name: String,
			// 	url: String,
			// },
			// location: {
			// 	name: {
			// 		type: String,
			// 		required: true,
			// 	},
			// 	url: {
			// 		type: String,
			// 		required: true,
			// 	},
			// },
			// image: {
			// 	type: String,
			// 	required: true,
			// },
			// episode: Array,
			// url: {
			// 	type: String,
			// 	required: true,
			// },
			// created: {
			// 	type: String,
			// 	required: true,
			// },
		},
	});
</script>

<template>
	<div
		class="
			relative
			bg-gray-700
			shadow-md
			rounded-3xl
			mx-1
			my-1
			cursor-pointer
		"
	>
		<router-link
			:to="{ name: 'character', params: { characterId: data.id } }"
		>
			<div class="overflow-x-hidden rounded-t-3xl relative">
				<img
					class="h-72 w-full object-cover"
					src="/public/not-image.jpeg"
				/>
			</div>
			<div class="mt-4 mb-2 p-4 flex justify-between">
				<div>
					<p class="text-lg font-bold text-cyan-300 mb-0">
						{{ data.name }}
					</p>
					<p class="text-md text-cyan-500 mt-0">
						{{ data.status }} - {{ data.species }}
					</p>
					<p class="text-md text-cyan-500 mt-0">
						Origin: {{ data.origin.name }}
					</p>
					<p class="text-md text-cyan-500 mt-0">
						Location: {{ data.location.name }}
					</p>
				</div>
				<div
					class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 group-hover:opacity-70"
						fill="none"
						viewBox="0 0 24 24"
						stroke="gray"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						/>
					</svg>
				</div>
			</div>
		</router-link>
	</div>
</template>
