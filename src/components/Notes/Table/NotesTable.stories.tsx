import type { Meta, StoryObj } from '@storybook/react';
import { NotesTable } from './NotesTable';

const meta: Meta = {
	component: NotesTable,
	title: 'Components/NotesTables',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: <></>,
	},
};
