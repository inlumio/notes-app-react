import type { Preview } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';

import '../src/index.scss';
import 'boxicons/css/boxicons.min.css';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [(Story) => <Provider store={store}>{Story()}</Provider>],
};

export default preview;
