type Props = {
	children: React.JSX.Element;
	action: () => void;
};

const ActionButton = ({ children, action }: Props) => {
	return (
		<button className='cursor-pointer p-0' onClick={action}>
			{children}
		</button>
	);
};

export default ActionButton;
