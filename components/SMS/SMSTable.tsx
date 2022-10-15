import React from 'react';
import { MessageProps, MessageTableProps } from '../../interface/type';
import { formatDate } from '../../utils/formatDate';

const SMSTable = ({ data }: MessageTableProps) => {
	return (
		<div className='col-span-7'>
			<div className='py-12 font-sans pr-12 w-full rounded'>
				<div className='shadow overflow-hidden border-b border-gray-700'>
					<table className='min-w-full'>
						<thead className='bg-gray-900 text-white'>
							<tr>
								<th className='w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm'>DATE</th>
								<th className='w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm'>PHONE NUMBER</th>
								<th className='w-1/23 text-left py-3 px-4 uppercase font-semibold text-sm'>MESSAGE</th>
								<th className='text-left py-3 px-4 uppercase font-semibold text-sm'>STATUS</th>
							</tr>
						</thead>
						<tbody className='text-gray-300'>
							{data?.map((message: MessageProps, i: number) => (
								<tr className='bg-gray-800' key={i}>
									<td className='w-1/5 text-left py-3 px-4'>{formatDate(message.createdAt)}</td>
									<td className='w-1/4 text-left py-3 px-4'>{message.phoneNumber}</td>
									<td className='w-1/2 text-left py-3 px-4'>{message.message}</td>
									<td className='text-left py-3 px-4'>
										{message.status == 'waiting' && (
											<div className='px-2 py-1 rounded text-gray-700 bg-yellow-400 text-xs'>WAITING</div>
										)}
										{message.status == 'success' && (
											<div className='px-2 py-1 rounded text-gray-700 bg-green-400 text-xs'>SUCCESS</div>
										)}
										{message.status == 'failed' && (
											<div className='px-2 py-1 rounded text-gray-700 bg-red-400 text-xs'>FAILED</div>
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default SMSTable;
