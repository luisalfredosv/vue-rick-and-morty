<script setup>
	import { onMounted, reactive, ref } from "vue";
	const items = [
		{
			label: "All",
			name: "ALL",
			active: false
		},
		{
			label: "Alive",
			name: "ALIVE",
			active: false
		},
		{
			label: "Dead",
			name: "DEAD",
			active: false
		},
		{
			label: "Unknown",
			name: "UNKNOWN",
			active: false
		},
	];
	const form = reactive({
		items: ref(items),
	});

</script>

<template>
	<div class="flex justify-center mt-8">
		<div class="flex w-1/3">
			<button
				v-for="(item, i) of items"
				:key="i"
				class="
					w-full
					flex-grow-0
					text-base
					hover:scale-110
					focus:outline-none
					flex
					justify-center
					px-4
					py-2
					font-bold
					cursor-pointer
					hover:bg-cyan-400 hover:text-white
					bg-gray-900
					text-cyan-700
					border
					duration-200
					ease-in-out
					border-cyan-300
					transition
				"
			>
				<div class="flex leading-5">
					{{ item.label }}
				</div>
			</button>
		</div>
	</div>
</template>
