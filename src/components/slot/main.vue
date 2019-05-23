<template>
	<ul>
		parent
		<slot></slot>
	</ul>
</template>

<script>
export default {
	props: {
		reverse: {
			type: Boolean,
			default: false
		}
	},
	provide() {
		return {
			parent: this
		};
	},

	watch: {
		reverse: {
            handler(newVal) {
            console.log('watch -- reverse',newVal)
				if (newVal) {
					this.$slots.default = [...this.$slots.default].reverse();
				}
			},
			immediate: true
		}
	},
	mounted() {
		console.log("parent -- this.$slot :", this.$slots);
	}
};
</script>

<style>
</style>
