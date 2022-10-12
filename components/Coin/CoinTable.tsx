import React from 'react';
import { useQuery } from 'react-query';

const getMarket = async () => {
	const URL =
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=IDR&order=market_cap_desc&per_page=10&page=1&sparkline=false';

	const response = await fetch(URL);

	if (!response.ok) {
		throw new Error('Fetching Error...');
	}

	return await response.json();
};

const CoinTable = () => {
	const { data, isLoading, isFetching, isSuccess, isError } = useQuery('market', getMarket);

	return (
		<div className='min-h-screen font-sans'>
			<div className='container mx-auto px-5 py-10'>
				<div className='relative overflow-x-auto shadow-md sm:rounded'>
					<table className='w-full text-sm text-left text-gray-300'>
						<thead className='text-xs text-gray-300 uppercase bg-gray-900'>
							<tr>
								<th scope='col' className='px-6 py-3'>
									#
								</th>
								<th scope='col' className='px-6 py-3'>
									Coin
								</th>
								<th scope='col' className='px-6 py-3'>
									Last Price
								</th>
								<th scope='col' className='px-6 py-3'>
									24h % Change
								</th>
								<th scope='col' className='px-6 py-3'>
									Total Volume
								</th>
								<th scope='col' className='px-6 py-3'>
									Market Cap
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className='bg-gray-800 border-b border-gray-700 hover:bg-gray-900'>
								<th scope='row' className='px-6 py-4 font-medium text-gray-200 whitespace-nowrap'>
									Apple MacBook Pro 17"
								</th>
								<td className='px-6 py-4'>Sliver</td>
								<td className='px-6 py-4'>Laptop</td>
								<td className='px-6 py-4'>$2999</td>
								<td className='px-6 py-4 text-right'>
									<a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
										Edit
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default CoinTable;
