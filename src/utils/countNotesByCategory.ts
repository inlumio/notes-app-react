import CategoryCountType from '../types/CategoryCountType';
import NoteType from '../types/NoteType';

const countNotesByCategory = (notes: NoteType[]) => {
	const categoriesData: CategoryCountType[] = [];
	notes.forEach((note) => {
		const currentCategoryIndex = categoriesData.findIndex(
			(category) => category.categoryName === note.category
		);
		if (currentCategoryIndex === -1) {
			categoriesData.push({
				categoryName: note.category,
				active: note.archived ? 0 : 1,
				archived: note.archived ? 1 : 0,
			});
		} else {
			categoriesData[currentCategoryIndex].active += note.archived ? 0 : 1;
			categoriesData[currentCategoryIndex].archived += note.archived ? 1 : 0;
		}
	});
	return categoriesData;
};

export { countNotesByCategory };
