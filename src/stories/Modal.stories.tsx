import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../components/Modal';

const meta: Meta = {
	component: Modal,
	title: 'Components/Modal',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
