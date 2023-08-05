const App = () => {
	return (
		<main className='max-w-7xl mx-auto p-4'>
			<section className='mb-10'>
				<table className='w-full note-table'>
					<colgroup>
						<col span={1} style={{ width: 'max-content' }} />
						<col span={1} style={{ width: '15%' }} />
						<col span={1} style={{ width: '10%' }} />
						<col span={1} style={{ width: '15%' }} />
						<col span={1} style={{ minWidth: 0, width: '100%' }} />
						<col span={1} style={{ minWidth: '100px' }} />
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
					<tbody></tbody>
				</table>
				<button className='create-btn ml-auto block text-white bg-slate-500 hover:bg-slate-700'>
					Create Note
				</button>
			</section>

			<table className='w-full summary-table'>
				<thead className='bg-slate-500'>
					<tr className='text-start select-none'>
						<th className='px-4 py-2 bg-slate-500 text-transparent'>Icon</th>
						<th className='px-4 py-2 bg-slate-500 text-white'>Note Category</th>
						<th className='px-4 py-2 bg-slate-500 text-white'>Active</th>
						<th className='px-4 py-2 bg-slate-500 text-white'>Archived</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
			<dialog className='modal'>
				<h2 className='text-2xl text-white font-bold text-center mb-4'>
					Add task
				</h2>
				<form>
					<label className=''>
						<h4>Note Name</h4>
						<input
							type='text'
							placeholder='Type name here'
							name='name'
							aria-errormessage='name-err'
							aria-invalid='false'
						/>
						<span id='name-err' className='err-msg'>
							Enter the name
						</span>
					</label>
					<label>
						<h4>Category</h4>
						<select name='category'>
							<option value='Task'>Task</option>
							<option value='Random Thought'>Random thoughts</option>
							<option value='Quote'>Quote</option>
							<option value='Idea'>Idea</option>
						</select>
					</label>
					<label>
						<h4>Content</h4>
						<textarea
							name='content'
							rows={5}
							aria-invalid='false'
							aria-errormessage='content-err'></textarea>
						<span id='content-err' className='err-msg'>
							At least 10 symbols
						</span>
					</label>
					<menu className='flex justify-start gap-2'>
						<button type='button' data-reset>
							Reset
						</button>
						<button type='button' data-close>
							Close
						</button>
						<button type='submit' data-submit className='ml-auto'>
							Confirm
						</button>
					</menu>
				</form>
			</dialog>
		</main>
	);
};

export default App;
