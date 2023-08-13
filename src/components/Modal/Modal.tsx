import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppSelector } from '../../store/hooks';
import NoteType from '../../types/NoteType';

export interface ModalProps {
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
		<div className='fixed inset-0 flex justify-center items-center'>
			<div
				className='bg-slate-800 opacity-60 absolute inset-0'
				onClick={close}></div>
			<div className='max-w-lg w-full bg-slate-500 p-6 rounded-lg z-10 shadow-md'>
				<h2 className='text-2xl text-white font-bold text-center mb-4'>
					Add task
				</h2>
				<form
					onSubmit={handleSubmit(submitHandler)}
					className='flex flex-col gap-4'>
					<label className='flex flex-col gap-1 relative'>
						<h4 className='text-white'>Note Name</h4>
						<input
							type='text'
							placeholder='Type name here'
							className='px-4 py-2  rounded-md'
							{...register('name', { required: true })}
							aria-invalid={errors.name ? 'true' : 'false'}
						/>
						{errors.name?.type === 'required' && (
							<span id='name-err' className='text-red-400 absolute right-0'>
								Enter the name
							</span>
						)}
					</label>
					<label className='flex flex-col gap-1 relative'>
						<h4 className='text-white'>Category</h4>
						<select
							{...register('category')}
							className='px-4 py-2 rounded-md w-full'>
							<option className='px-4 py-2 rounded-md' value='Task'>
								Task
							</option>
							<option className='px-4 py-2 rounded-md' value='Random Thought'>
								Random thoughts
							</option>
							<option className='px-4 py-2 rounded-md' value='Quote'>
								Quote
							</option>
							<option className='px-4 py-2 rounded-md' value='Idea'>
								Idea
							</option>
						</select>
					</label>
					<label className='flex flex-col gap-1 relative'>
						<h4 className='text-white'>Content</h4>
						<textarea
							{...register('content')}
							className='resize-none block w-full px-4 py-2 rounded-md'></textarea>
					</label>
					<input type='hidden' {...register('id')} />
					<input type='hidden' {...register('createdAt')} />
					<input type='hidden' {...register('archived')} />
					<menu className='flex justify-start gap-2'>
						<button
							type='button'
							onClick={() => reset({ ...activeNote })}
							className='px-6 py-2 rounded-lg font-bold transition-colors border-4 border-solid border-white text-white hover:bg-white hover:text-slate-500'>
							Reset
						</button>
						<button
							type='button'
							onClick={close}
							className='px-6 py-2 rounded-lg font-bold transition-colors border-4 border-solid border-white text-white hover:bg-white hover:text-slate-500'>
							Close
						</button>
						<button
							type='submit'
							className='px-6 py-2 rounded-lg font-bold transition-colors border-4 border-solid border-white text-white hover:bg-white hover:text-slate-500'>
							Confirm
						</button>
					</menu>
				</form>
			</div>
		</div>
	);
};
