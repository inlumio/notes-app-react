export const Modal = () => {
	return (
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
	);
};
