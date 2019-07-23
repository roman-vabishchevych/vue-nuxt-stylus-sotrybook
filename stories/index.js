import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import Header from '../components/Header.vue'

storiesOf('Header', module)
	.add('with title', () => ({
		components: { Header },
		template: `<Header title='Title'>Test</Header>`
	}))
	.add('w/o title', () => ({
		components: { Header },
		template: `<Header>Test</Header>`
	}))
