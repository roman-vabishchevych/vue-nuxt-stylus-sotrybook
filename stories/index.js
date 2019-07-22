import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import logo from '../components/Logo.vue';

storiesOf('Logo', module)
  .add('with text', () => '<logo/>');
