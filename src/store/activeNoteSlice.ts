import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import Category from '../types/CategoriesEnum';
import NoteType from '../types/NoteType';

const initialState: NoteType = {
	id: -1,
	name: '',
	category: Category.Task,
	content: '',
	createdAt: '',
	archived: false,
};

const activeNoteSlice = createSlice({
	name: 'activeNote',
	initialState,
	reducers: {
		setActiveNote: (_, action: PayloadAction<NoteType>) => {
			return action.payload;
		},
		resetActiveNote: () => {
			return initialState;
		},
	},
});

export const { setActiveNote, resetActiveNote } = activeNoteSlice.actions;
export const activeNoteReducer = activeNoteSlice.reducer;
export const selectActiveNote = (state: RootState) => state.activeNote;
