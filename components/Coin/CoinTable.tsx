import React, { useState } from 'react';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
// import { dehydrate } from 'react-query/hydration';
import { PageProps, Price } from '../../interface/type';
import Loader from '../Loader';
import Coin from './Coin';

const getMarket = async (page = 1) => {
	const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=IDR&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`;

	const response = await fetch(URL);

	if (!response.ok) {
		throw new Error('Fetching Error...');
	}

	return await response.json();
};

// SSR with initial data
// export async function getStaticProps() {
// 	const initialPrice = await getMarket();
// 	return {
// 		props: { initialPrice },
// 	};
// }

// SSR with hydrate
export async function getStaticProps() {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery(['market', 1], () => getMarket());

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
}

const CoinTable = () => {
	const [page, setPage] = useState(1);
	const nextPage = () => {
		setPage((old) => old + 1);
	};
	const previousPage = () => {
		setPage((old) => old - 1);
	};

	const { data, isLoading, isFetching, isSuccess, isError } = useQuery(['market', page], () => getMarket(page), {
		staleTime: 60000,
		refetchInterval: 60000,
		// initialData: initialPrice,
	});

	return (
		<div className='min-h-screen font-sans'>
			<div className='container mx-auto px-5 py-10'>
				<div className='relative overflow-x-auto shadow-md sm:rounded'>
					<table className='w-full text-sm text-left text-gray-300'>
						<thead className='text-xs text-gray-300 uppercase bg-gray-900'>
							<tr>
								<th scope='col' className='px-3 text-center py-3'>
									#
								</th>
								<th scope='col' className='px-4 py-3'>
									Coin
								</th>
								<th scope='col' className='px-4 py-3'>
									Last Price
								</th>
								<th scope='col' className='px-4 py-3'>
									1h % Change
								</th>
								<th scope='col' className='px-4 py-3'>
									24h % Change
								</th>
								<th scope='col' className='px-4 py-3'>
									7d % Change
								</th>
								<th scope='col' className='px-4 py-3'>
									Total Volume
								</th>
								<th scope='col' className='px-4 py-3'>
									Market Cap
								</th>
							</tr>
						</thead>
						<tbody>{isSuccess && data?.map((coin: Price, i: number) => <Coin value={coin} key={i} />)}</tbody>
					</table>
					{isLoading ? (
						<Loader />
					) : (
						<div className='px-5 py-5 bg-gray-900 flex flex-col xs:flex-row items-center xs:justify-between'>
							<span className='text-xs xs:text-sm text-gray-300'>Showing 1 to 4 of 50 Entries</span>
							<div className='inline-flex mt-2 xs:mt-0'>
								<button
									className='text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l'
									onClick={previousPage}
									disabled={page === 1 ? true : false}
								>
									Prev
								</button>
								<div className='font-bold py-2 px-4 bg-gray-300 border-x border-gray-900'>{page}</div>
								<button
									className='text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r'
									onClick={nextPage}
								>
									Next
								</button>
							</div>
						</div>
					)}

					{isError && (
						<div className='h-96 flex justify-center items-center text-gray-300 font-bold'>
							There was an error processing your request
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CoinTable;
