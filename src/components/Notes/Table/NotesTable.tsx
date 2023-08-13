type Props = {
	children: React.JSX.Element[];
};

export const NotesTable = ({ children }: Props) => {
	return (
		<table className='w-full border-separate border-spacing-y-2'>
			{children}
		</table>
	);
};
