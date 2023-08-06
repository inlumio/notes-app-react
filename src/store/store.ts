import { configureStore } from '@reduxjs/toolkit';
import { notesReducer } from './notesSlice';
import { activeNoteReducer } from './activeNoteSlice';
import { modalOpenReducer } from './modalOpenSlice';

export const store = configureStore({
	reducer: {
		notes: notesReducer,
		activeNote: activeNoteReducer,
		modalOpen: modalOpenReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
