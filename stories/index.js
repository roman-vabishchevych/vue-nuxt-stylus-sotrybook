import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import Header from '../components/Header.vue'
import Btn from '../components/Btn.vue'

storiesOf('Header', module)
	.add('As a component', () => ({
		components: { Header },
		template: '<Header>Test</Header>'
	}))

storiesOf('Btn', module)
	.add('As a component', () => ({
		components: { Btn },
		template: '<btn />'
	}))