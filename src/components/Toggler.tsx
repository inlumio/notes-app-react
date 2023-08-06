type Props = {
	state: boolean;
	onStateChange: (value: boolean) => void;
};

export const Toggler = ({ state, onStateChange }: Props) => {
	return (
		<label title='Show archived' className='toggle cursor-pointer'>
			<input
				type='checkbox'
				name=''
				id='show-archived'
				checked={state}
				onChange={(e) => onStateChange(e.target.checked)}
			/>
			<span></span>
		</label>
	);
};
