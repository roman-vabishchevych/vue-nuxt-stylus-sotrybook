<template>
	<div class="header">
		<h3>{{ title }}</h3>
		<slot />
		<img src="/icon.png">
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: ''
		}
	}
}
</script>

<style lang="stylus">
	@require "../styles/global"
	.header
		background-color redColor
		color white
		padding 40px
</style>
