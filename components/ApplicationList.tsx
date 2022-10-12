import React from 'react';

const ApplicationList = () => {
	return (
		<section className='min-h-screen body-font text-gray-600 '>
			<div className='container mx-auto px-5 py-10'>
				<div className='flex flex-wrap'>
					<div className='w-full cursor-pointer hover:scale-105 transition-all md:w-1/2 lg:w-1/4 border-gray-500 border-2 rounded shadow-md  bg-gradient-to-br from-black to-gray-900'>
						<a className='relative block h-48 overflow-hidden rounded'>
							<img
								alt='ecommerce'
								className='block h-full w-full object-cover object-center'
								src='/images/crypto.jpg'
							/>
						</a>
						<div className='mt-4 mb-2 text-center'>
							<h2 className='title-font mb-1 text-xs tracking-widest text-gray-500'>CryptoCurrency Price Tracker</h2>
							<h1 className='title-font text-lg font-medium text-gray-300'>D2YCRYPTO PRICE</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ApplicationList;
