import { Meta, StoryObj } from '@storybook/react';
import { ActionButton } from '../components/ActionButton';

const meta: Meta = {
	title: 'Components/ActionButton',
	component: ActionButton,
};
export default meta;

type Story = StoryObj<typeof ActionButton>;

export const Default: Story = {
	args: {
		children: 'Open modal',
	},
};
