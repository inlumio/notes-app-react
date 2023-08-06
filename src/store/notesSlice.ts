import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import NoteType from '../types/NoteType';
import Category from '../types/CategoriesEnum';

const initialState: NoteType[] = [
	{
		id: 1,
		name: 'Shopping list',
		createdAt: '2021/3/20',
		category: Category.Task,
		content: 'Tomatoes, bread',
		archived: false,
	},
	{
		id: 2,
		name: 'The theory of evolution',
		createdAt: '2021/3/27',
		category: Category.RandomThought,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem',
		archived: false,
	},
	{
		id: 3,
		name: 'New Feature',
		createdAt: '2021/3/27',
		category: Category.Idea,
		content: 'Implement new feature on 3/5/2021 and 5/5/2021',
		archived: false,
	},
	{
		id: 4,
		name: 'Hamlet',
		createdAt: '2021/4/2',
		category: Category.Quote,
		content: 'To be or not to be',
		archived: false,
	},
	{
		id: 5,
		name: 'Books',
		createdAt: '2021/4/6',
		category: Category.Task,
		content: 'Buy "The Lord of the Rings" on sale 4/10/2021',
		archived: false,
	},
	{
		id: 6,
		name: 'Why grass is green',
		createdAt: '2021/4/21',
		category: Category.RandomThought,
		content: 'Because it is',
		archived: true,
	},
	{
		id: 7,
		name: 'Oscar Wilde',
		createdAt: '2021/5/4',
		category: Category.Quote,
		content: 'Be yourself; everyone else is already taken.',
		archived: false,
	},
];

const notesSlice = createSlice({
	name: 'notes',
	initialState,
	reducers: {
		addNote: (state, action: PayloadAction<NoteType[]>) => {
			[...state, action.payload];
		},
		deleteNote: (state, action: PayloadAction<number>) => {
			return state.filter((note) => note.id !== action.payload);
		},
		archiveNote: (state, action: PayloadAction<number>) => {
			return state.map((note) =>
				note.id === action.payload
					? { ...note, archived: !note.archived }
					: note
			);
		},
	},
});

export const { addNote, deleteNote, archiveNote } = notesSlice.actions;

export const notesReducer = notesSlice.reducer;

export const selectNotes = (state: RootState) => state.notes;
