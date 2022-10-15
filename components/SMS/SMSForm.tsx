import React from 'react';

const SMSForm = () => {
	return (
		<div className='container col-span-5 pl-12 py-4 mx-auto flex'>
			<div className='w-full bg-gray-900 rounded p-8 flex flex-col md:ml-auto m-8 shadow-md'>
				<h2 className='text-gray-200 text-lg mb-1 font-medium title-font'>Request Pulsa</h2>
				<p className='leading-relaxed mb-5 text-gray-400'>
					Post-ironic portland shabby chic echo park, banjo fashion axe
				</p>
				<div className='relative mb-4'>
					<label className='leading-7 text-sm text-gray-400'>PHONE NUMBER</label>
					<input
						type='number'
						id='phone'
						name='phone'
						className='w-full bg-gray-800 rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
					/>
				</div>
				<div className='relative mb-4'>
					<label className='leading-7 text-sm text-gray-400'>Message</label>
					<textarea
						id='message'
						name='message'
						className='w-full bg-gray-800 rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-300 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
					></textarea>
				</div>
				<button className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-400 rounded text-lg'>
					SEND
				</button>
				<p className='text-xs text-gray-500 mt-3'>
					Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
				</p>
			</div>
		</div>
	);
};

export default SMSForm;
