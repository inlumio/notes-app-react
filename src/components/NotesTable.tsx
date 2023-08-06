type Props = {
	children: React.JSX.Element[];
};

export const NotesTable = ({ children }: Props) => {
	return <table className='w-full'>{children}</table>;
};
