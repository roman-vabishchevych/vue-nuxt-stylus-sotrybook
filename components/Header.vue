<template>
	<header class="header">
		<h3>{{ title }}</h3>
		<div v-html="content"></div>
	</header>
</template>

<script>
	export default {
		props: {
			title: String,
			default: 'Unknown title'
		}
	}
</script>

<style lang="stylus">
	@require "../styles/global"
	.header
		transform scale(1.2) !important
		display flex
		background-color redColor
		width 10px
		height @width
</style>
