type Props = {
	colspan: number;
};

export const NoItemsRow = ({ colspan }: Props) => {
	return (
		<tr>
			<td
				className='px-4 py-2 bg-slate-200 text-slate-600 font-normal text-center'
				colSpan={colspan}>
				No items
			</td>
		</tr>
	);
};
