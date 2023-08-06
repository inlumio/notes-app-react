import { Modal } from './components/Modal';
import { NoteRow } from './components/NoteRow';
import { NotesTable } from './components/NotesTable';
import Category from './types/CategoriesEnum';

const App = () => {
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
							<th className='px-4 py-2 bg-slate-500 text-white'>
								<label title='Show archived' className='toggle cursor-pointer'>
									<input type='checkbox' name='' id='show-archived' />
									<span></span>
								</label>
							</th>
							<th
								className='px-4 py-2 bg-slate-500 text-white cursor-pointer'
								data-action='archive all'>
								<i className='bx bxs-archive-in'></i>
							</th>
							<th
								className='px-4 py-2 bg-slate-500 text-white cursor-pointer'
								data-action='delete all'>
								<i className='bx bxs-trash'></i>
							</th>
						</tr>
					</thead>
					<tbody>
						<NoteRow
							id={1}
							name='Shopping list'
							category={Category.Task}
							createdAt='2021/05/03'
							content='Milk, eggs, bread on 07/05/2021'
							archived={false}></NoteRow>
					</tbody>
				</NotesTable>
				<button className='create-btn ml-auto block text-white bg-slate-500 hover:bg-slate-700'>
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
					<tbody></tbody>
				</NotesTable>
			</section>

			<Modal></Modal>
		</main>
	);
};

export default App;
