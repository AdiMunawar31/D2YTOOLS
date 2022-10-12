import Link from 'next/link';
import React from 'react';
import ApplicationList from '../components/ApplicationList';
import Layout from '../components/Layout';

const playground = () => {
	return (
		<Layout>
			<div className='flex justify-between items-center'>
				<Link href='/'>
					<div className='p-3 w-20 ml-12 mt-12 rounded-full bg-gray-700 hover:bg-gray-800 flex justify-center text-gray-100 hover:scale-95 transition-all cursor-pointer'>
						Back
					</div>
				</Link>
				<img
					src='https://avatars.githubusercontent.com/u/57015700?v=4'
					className=' rounded-full mr-12 mt-10 animate-spin'
					alt='AM Logo'
					width={45}
					height={20}
				/>
			</div>
			<ApplicationList />
		</Layout>
	);
};

export default playground;
