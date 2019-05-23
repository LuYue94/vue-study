<template>
	<li>
		<div>child {{index}}</div>
	</li>
</template>

<script>
export default {
	inject: ["parent"],

	props: {
		index: {
			type: Number,
			default: undefined
		}
	},
	mounted() {
		console.log("child -- this.$slot :", this.$slots);
	}
};
</script>

<style>
</style>
