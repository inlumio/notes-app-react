import type { Meta, StoryObj } from '@storybook/react';
import { NoteRow } from './NoteRow';
import Category from '../../../types/CategoriesEnum';

const meta: Meta = {
	component: NoteRow,
	title: 'Components/NoteRow',
	argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		note: {
			id: 5,
			name: 'Books',
			createdAt: '2021/4/6',
			category: Category.Task,
			content: 'Buy "The Lord of the Rings" on sale 4/10/2021',
			archived: false,
		},
	},
};
