import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta = {
	component: Modal,
	title: 'Components/Modal',
	argTypes: {
		submit: {
			action: 'submit',
		},
		close: {
			action: 'close',
		},
	},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
