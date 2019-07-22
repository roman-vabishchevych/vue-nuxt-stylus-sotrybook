import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import header from '../components/Header.vue';

storiesOf('Header', module)
  .add('with text', () => '<header>Test content</header>')
  .add('with title', () => '<header :title="asdfasdf">Test content with title</header>');
