import NoteType from '../types/NoteType';
import { formatDate } from '../utils/formatDate';
import { findDatesInString } from '../utils/findDatesInString';
import getCategoryIcon from '../utils/getCategoryIcon';

interface NoteRowProps {
	note: NoteType;
}

export const NoteRow: React.FC<NoteRowProps> = ({ note }) => {
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
				{findDatesInString(note.content)}
			</td>
			<td
				className='px-4 py-2 bg-slate-200 text-slate-600 font-normal cursor-pointer'
				data-action='edit'>
				<i className='bx bxs-edit'></i>
			</td>
			<td
				className='px-4 py-2 bg-slate-200 text-slate-600 font-normal cursor-pointer'
				data-action='archive'>
				<i className='bx bxs-archive-in'></i>
			</td>
			<td
				className='px-4 py-2 bg-slate-200 text-slate-600 font-normal cursor-pointer'
				data-action='delete'>
				<i className='bx bxs-trash'></i>
			</td>
		</tr>
	);
};
