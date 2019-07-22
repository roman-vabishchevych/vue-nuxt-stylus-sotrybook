import { configure } from '@storybook/vue';
import { addParameters } from '@storybook/vue';

addParameters({
  backgrounds: [
    { name: 'white', value: '#ffffff', default: true },
    { name: 'black', value: '#000000' },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
    { name: 'se7ensky', value: '#ff6900' },
  ],
});

function loadStories() {
	const req = require.context('../stories', true, /\.js$/);
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
