import NoteType from '../types/NoteType';
import { formatDate } from '../utils/formatDate';
import { findDatesInString } from '../utils/findDatesInString';
import getCategoryIcon from '../utils/getCategoryIcon';
import ActionButton from './ActionButton';
import { useAppDispatch } from '../store/hooks';
import { archiveNote, deleteNote } from '../store/notesSlice';
import { setActiveNote } from '../store/activeNoteSlice';
import { openModal } from '../store/modalOpenSlice';

interface NoteRowProps {
	note: NoteType;
}

export const NoteRow: React.FC<NoteRowProps> = ({ note }) => {
	const dispatch = useAppDispatch();

	const editHandler = (note: NoteType) => {
		dispatch(setActiveNote(note));
		dispatch(openModal());
	};
	const archiveHandler = (id: number) => {
		dispatch(archiveNote(id));
	};
	const deleteHandler = (id: number) => {
		dispatch(deleteNote(id));
	};

	return (
		<tr data-note-id={note.id}>
			<td className='px-4 py-2 bg-slate-200 w-10'>
				<div className='rounded-full p-2 bg-slate-600 inline-flex'>
					<i className={`${getCategoryIcon(note.category)} text-white`}></i>
				</div>
			</td>
			<td className='px-4 py-2 bg-slate-200 text-black font-bold'>
				{note.name}
			</td>
			<td className='px-4 py-2 bg-slate-200 text-slate-600 font-normal truncate'>
				{formatDate(note.createdAt)}
			</td>
			<td className='px-4 py-2 bg-slate-200 text-slate-600 font-normal'>
				{note.category}
			</td>
			<td className='px-4 py-2 bg-slate-200 text-slate-600 font-normal '>
				{note.content}
			</td>
			<td className='px-4 py-2 bg-slate-200 text-slate-600 font-normal'>
				{findDatesInString(note.content).join(', ')}
			</td>
			<td className='px-4 py-2 bg-slate-200 text-slate-600 font-normal'>
				<ActionButton action={() => editHandler(note)}>
					<i className='bx bxs-edit'></i>
				</ActionButton>
			</td>
			<td className='px-4 py-2 bg-slate-200 text-slate-600 font-normal cursor-pointer'>
				<ActionButton action={() => archiveHandler(note.id)}>
					<i className='bx bxs-archive-in'></i>
				</ActionButton>
			</td>
			<td className='px-4 py-2 bg-slate-200 text-slate-600 font-normal cursor-pointer'>
				<ActionButton action={() => deleteHandler(note.id)}>
					<i className='bx bxs-trash'></i>
				</ActionButton>
			</td>
		</tr>
	);
};
