import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppSelector } from '../store/hooks';
import NoteType from '../types/NoteType';

interface ModalProps {
	close: () => void;
	submit: (data: NoteType) => void;
}

export const Modal = ({ submit, close }: ModalProps) => {
	const activeNote = useAppSelector((state) => state.activeNote);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<NoteType>({
		defaultValues: activeNote,
	});

	const submitHandler: SubmitHandler<NoteType> = (data) => {
		submit(data);
	};

	return (
		<div className='modal'>
			<div className='modal-overlay' onClick={close}></div>
			<div className='modal-content'>
				<h2 className='text-2xl text-white font-bold text-center mb-4'>
					Add task
				</h2>
				<form onSubmit={handleSubmit(submitHandler)}>
					<label className=''>
						<h4>Note Name</h4>
						<input
							type='text'
							placeholder='Type name here'
							{...register('name', { required: true })}
							aria-invalid={errors.name ? 'true' : 'false'}
						/>
						{errors.name?.type === 'required' && (
							<span id='name-err' className='err-msg'>
								Enter the name
							</span>
						)}
					</label>
					<label>
						<h4>Category</h4>
						<select {...register('category')}>
							<option value='Task'>Task</option>
							<option value='Random Thought'>Random thoughts</option>
							<option value='Quote'>Quote</option>
							<option value='Idea'>Idea</option>
						</select>
					</label>
					<label>
						<h4>Content</h4>
						<textarea {...register('content')}></textarea>
					</label>
					<input type='hidden' {...register('id')} />
					<input type='hidden' {...register('createdAt')} />
					<input type='hidden' {...register('archived')} />
					<menu className='flex justify-start gap-2'>
						<button type='button' onClick={() => reset({ ...activeNote })}>
							Reset
						</button>
						<button type='button' onClick={close}>
							Close
						</button>
						<button type='submit'>Confirm</button>
					</menu>
				</form>
			</div>
		</div>
	);
};
