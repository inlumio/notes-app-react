import { Meta, StoryObj } from '@storybook/react';
import { ActionButton } from './ActionButton';

const meta: Meta = {
	title: 'Components/ActionButton',
	component: ActionButton,
	argTypes: {
		action: {
			action: 'click',
		},
	},
};
export default meta;

type Story = StoryObj<typeof ActionButton>;

export const Default: Story = {
	args: {
		children: 'Hi',
	},
};
