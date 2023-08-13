import React from 'react';
import CategoryCountType from '../../../types/CategoryCountType';
import getCategoryIcon from '../../../utils/getCategoryIcon';

interface SummaryRowProps {
	categoryData: CategoryCountType;
}

export const SummaryRow: React.FC<SummaryRowProps> = ({ categoryData }) => {
	return (
		<tr className=''>
			<td className='px-4 py-2 bg-slate-200 w-0'>
				<div className='rounded-full p-2 bg-slate-600 inline-flex'>
					<i
						className={`${getCategoryIcon(
							categoryData.categoryName
						)} text-white`}></i>
				</div>
			</td>
			<td className='px-4 py-2 bg-slate-200 text-black font-bold truncate'>
				{categoryData.categoryName}
			</td>
			<td className='px-4 py-2 bg-slate-200 text-black truncate'>
				{categoryData.active}
			</td>
			<td className='px-4 py-2 bg-slate-200 text-black truncate'>
				{categoryData.archived}
			</td>
		</tr>
	);
};
