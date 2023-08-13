import type { Meta, StoryObj } from '@storybook/react';
import { SummaryRow } from './SummaryRow';
import Category from '../../../types/CategoriesEnum';

const meta: Meta = {
	component: SummaryRow,
	title: 'Components/SummaryRow',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		categoryData: {
			categoryName: Category.Idea,
			archived: 10,
			active: 5,
		},
	},
};
