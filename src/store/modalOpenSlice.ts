import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

const initialState = false;

const modalOpenSlice = createSlice({
	name: 'modalOpen',
	initialState,
	reducers: {
		openModal() {
			return true;
		},
		closeModal() {
			return false;
		},
	},
});

export const { openModal, closeModal } = modalOpenSlice.actions;
export const modalOpenReducer = modalOpenSlice.reducer;
export const selectModalOpen = (state: RootState) => state.modalOpen;
