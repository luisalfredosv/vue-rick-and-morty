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

import Card from "../components/Card.vue";

</script>

<template>
	<div>
		<Card :data="data"></Card>
	</div>
</template>
