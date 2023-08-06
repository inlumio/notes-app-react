import { useState } from 'react';
import ActionButton from './components/ActionButton';
import { Modal } from './components/Modal';
import { NoteRow } from './components/NoteRow';
import { NotesTable } from './components/NotesTable';
import { SummaryRow } from './components/SummaryRow';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { countNotesByCategory } from './utils/countNotesByCategory';
import { Toggler } from './components/Toggler';
import {
	addNote,
	archiveNote,
	deleteNote,
	updateNote,
} from './store/notesSlice';
import { NoItemsRow } from './components/NoItemsRow';
import { closeModal, openModal } from './store/modalOpenSlice';
import { resetActiveNote } from './store/activeNoteSlice';

const App = () => {
	const [toggleActive, setToggleActive] = useState(false);
	const notes = useAppSelector((state) => state.notes);
	const summaryData = countNotesByCategory(notes);
	const toggleAccordingNotes = notes.filter(
		(note) => note.archived === toggleActive
	);

	const modalOpened = useAppSelector((state) => state.modalOpen);

	const dispatch = useAppDispatch();

	const deleteAllHandler = () => {
		toggleAccordingNotes.forEach((note) => {
			dispatch(deleteNote(note.id));
		});
	};

	const archiveAllHandler = () => {
		toggleAccordingNotes.forEach((note) => {
			dispatch(archiveNote(note.id));
		});
	};

	return (
		<main className='max-w-7xl mx-auto p-4'>
			<section className='mb-10'>
				<NotesTable>
					<colgroup>
						<col span={1} style={{ width: 'max-content' }} />
						<col span={1} style={{ width: '15%' }} />
						<col span={1} style={{ width: '10%' }} />
						<col span={1} style={{ width: '15%' }} />
						<col span={1} style={{ minWidth: 0, width: '100%' }} />
						<col span={1} style={{ minWidth: '150px' }} />
						<col span={1} style={{ width: 'min-content' }} />
						<col span={1} style={{ width: 'min-content' }} />
						<col span={1} style={{ width: 'min-content' }} />
					</colgroup>
					<thead className='bg-slate-500'>
						<tr className='text-start'>
							<th className='px-4 py-2 bg-slate-500 text-transparent select-none'>
								Icon
							</th>
							<th className='px-4 py-2 bg-slate-500 text-white min-w-0'>
								Name
							</th>
							<th className='px-4 py-2 bg-slate-500 text-white min-w-0'>
								Created
							</th>
							<th className='px-4 py-2 bg-slate-500 text-white min-w-0'>
								Category
							</th>
							<th className='px-4 py-2 bg-slate-500 text-white min-w-0'>
								Content
							</th>
							<th className='px-4 py-2 bg-slate-500 text-white min-w-0'>
								Dates
							</th>
							<th className='px-4 py-2'>
								<Toggler state={toggleActive} onStateChange={setToggleActive} />
							</th>
							<th className='px-4 py-2 bg-slate-500 text-white'>
								<ActionButton action={archiveAllHandler}>
									<i className='bx bxs-archive-in'></i>
								</ActionButton>
							</th>
							<th className='px-4 py-2 bg-slate-500 text-white '>
								<ActionButton action={deleteAllHandler}>
									<i className='bx bxs-trash'></i>
								</ActionButton>
							</th>
						</tr>
					</thead>
					<tbody>
						{toggleAccordingNotes.length > 0 ? (
							toggleAccordingNotes.map((note) => (
								<NoteRow key={note.id} note={note}></NoteRow>
							))
						) : (
							<NoItemsRow colspan={9} />
						)}
					</tbody>
				</NotesTable>
				<button
					className='create-btn ml-auto block text-white bg-slate-500 hover:bg-slate-700'
					onClick={() => {
						dispatch(resetActiveNote());
						dispatch(openModal());
					}}>
					Create Note
				</button>
			</section>
			<section>
				<NotesTable>
					<thead className='bg-slate-500'>
						<tr className='text-start select-none'>
							<th className='px-4 py-2 bg-slate-500 text-transparent'>Icon</th>
							<th className='px-4 py-2 bg-slate-500 text-white'>
								Note Category
							</th>
							<th className='px-4 py-2 bg-slate-500 text-white'>Active</th>
							<th className='px-4 py-2 bg-slate-500 text-white'>Archived</th>
						</tr>
					</thead>
					<tbody>
						{summaryData.length > 0 ? (
							summaryData.map((category) => (
								<SummaryRow
									key={category.categoryName}
									categoryData={category}
								/>
							))
						) : (
							<NoItemsRow colspan={4} />
						)}
					</tbody>
				</NotesTable>
			</section>

			{modalOpened && (
				<Modal
					submit={(note) => {
						if (note.id !== -1) dispatch(updateNote(note));
						else {
							note.createdAt = Intl.DateTimeFormat('en-US').format(new Date());
							dispatch(addNote(note));
						}

						dispatch(closeModal());
						dispatch(resetActiveNote());
					}}
					close={() => dispatch(closeModal())}
				/>
			)}
		</main>
	);
};

export default App;
