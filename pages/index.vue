<template>
	<div class="container">
		<Header title="Title">
			Content
		</Header>
		<btn />
	</div>
</template>

<script>
import Btn from '../components/Btn.vue'
import Header from '../components/Header.vue'

export default {
	components: {
		Btn,
		Header,
	}
}
</script>
