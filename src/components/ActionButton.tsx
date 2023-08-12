export type ActionButtonProps = {
	children: React.JSX.Element | string;
	action: () => void;
};

export const ActionButton = ({ children, action }: ActionButtonProps) => {
	return (
		<button className='cursor-pointer p-0' onClick={action}>
			{children}
		</button>
	);
};
