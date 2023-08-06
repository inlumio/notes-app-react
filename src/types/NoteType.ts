import Category from './CategoriesEnum';

type NoteType = {
	id: number;
	name: string;
	category: Category;
	content: string;
	createdAt: string;
	archived: boolean;
};

export default NoteType;
