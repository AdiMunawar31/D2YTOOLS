import Link from 'next/link';
import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Layout from '../components/Layout';
import SMSForm from '../components/SMS/SMSForm';
import SMSTable from '../components/SMS/SMSTable';

const getMessages = async () => {
	const URL = ' http://localhost:3000/api/message';
	const result = await fetch(URL);
	return await result.json();
};

const fakesms = () => {
	const queryClient = useQueryClient();
	const { data, isSuccess } = useQuery('fakesms', getMessages, {
		staleTime: 15000,
		refetchInterval: 15000,
	});

	return (
		<Layout>
			<div className='min-h-screen'>
				<div className='flex justify-between items-center'>
					<Link href='/playground'>
						<div className='p-3 w-20 ml-8 md:ml-12 mt-12 rounded-full bg-gray-700 hover:bg-gray-800 flex justify-center text-gray-100 hover:scale-95 transition-all cursor-pointer'>
							Back
						</div>
					</Link>
					<img
						src='https://avatars.githubusercontent.com/u/57015700?v=4'
						className=' rounded-full mr-12 mt-10 animate-bounce'
						alt='AM Logo'
						width={45}
						height={20}
					/>
				</div>
				<h1 className='text-3xl text-gray-100 font-bold ml-12 mt-8 -mb-4'>#D2YSMS FAKE</h1>

				<div className='block lg:grid grid-cols-12'>
					<SMSForm />
					<SMSTable data={data} />
				</div>
			</div>
		</Layout>
	);
};

export default fakesms;
