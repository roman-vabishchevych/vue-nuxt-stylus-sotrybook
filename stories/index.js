import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import Header from '../components/Header.vue'

storiesOf('Header', module)
	.add('with text', () => `<Header>Test content</Header>`)
	.add('with title', () => `<Header title='asdfasdf'>Test content with title!</Header>`)
