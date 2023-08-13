import type { Meta, StoryObj } from '@storybook/react';
import { Toggler } from './Toggler';

const meta: Meta = {
	component: Toggler,
	title: 'Components/Toggler',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
export const On: Story = {
	args: {
		state: true,
	},
};
