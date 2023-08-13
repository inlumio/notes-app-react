export type ActionButtonProps = {
	children: string;
	action: () => void;
};

export const ActionButton = ({ children, action }: ActionButtonProps) => {
	return (
		<button
			className='ml-auto block text-white bg-slate-500 hover:bg-slate-700 px-6 py-2 rounded-lg font-bold transition-colors;'
			onClick={action}>
			{children}
		</button>
	);
};
