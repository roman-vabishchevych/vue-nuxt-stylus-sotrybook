<template>
	<div class="header">
		<h3>{{ title }}</h3>
		<div v-html="content" />
	</div>
</template>

<script>
export default {
	props: ['title']
}
</script>

<style lang="stylus">
	@require "../styles/global"
	.header
		background-color redColor
		color white
		padding 40px
</style>
