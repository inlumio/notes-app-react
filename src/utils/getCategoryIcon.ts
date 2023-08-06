import Category from '../types/CategoriesEnum';

const getCategoryIcon = (category: Category): string => {
	if (category === Category.Idea) return 'bx bx-bulb';
	if (category === Category.Task) return 'bx bx-task';
	if (category === Category.RandomThought) return 'bx bx-chat';
	if (category === Category.Quote) return 'bx bxs-quote-alt-right';
	return '';
};

export default getCategoryIcon;
